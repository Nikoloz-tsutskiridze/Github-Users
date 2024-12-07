import React, { useEffect, useState } from "react";
import mockUser from "./mockData.js/mockUser";
import mockRepos from "./mockData.js/mockRepos";
import mockFollowers from "./mockData.js/mockFollowers";
import axios from "axios";

const rootUrl = "https://api.github.com";

const GithubContext = React.createContext();

function GithubProvider({ children }) {
  const [githubUser, setGithubUser] = useState(mockUser);
  const [repos, setRepos] = useState(mockRepos);
  const [followers, setFollowers] = useState(mockFollowers);

  const [requests, setRequests] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState({ show: false, msg: "" });

  async function searchUser(user) {
    toggleError();
    setIsLoading(true);

    try {
      const response = await axios(`${rootUrl}/users/${user}`);
      if (response) {
        setGithubUser(response.data);
        const { login, followers_url } = response.data;

        const [reposResult, followersResult] = await Promise.allSettled([
          axios(`${rootUrl}/users/${login}/repos?per_page=100`),
          axios(`${followers_url}?per_page=100`),
        ]);

        if (reposResult.status === "fulfilled") {
          setRepos(reposResult.value.data);
        } else {
          toggleError(true, "Could not fetch user repositories");
        }

        if (followersResult.status === "fulfilled") {
          setFollowers(followersResult.value.data);
        } else {
          toggleError(true, "Could not fetch user followers");
        }
      } else {
        toggleError(true, "There is no user with that username");
      }
    } catch (error) {
      toggleError(true, "Something went wrong. Please try again.");
    } finally {
      checkRequests();
      setIsLoading(false);
    }
  }

  function checkRequests() {
    axios(`${rootUrl}/rate_limit`)
      .then(({ data }) => {
        let {
          rate: { remaining },
        } = data;

        setRequests(remaining);
        if (remaining === 0) {
          toggleError(true, "Sorry, you have exeeded your hourly rate limit");
        }
      })
      .catch((err) => console.log(err));
  }

  function toggleError(show = false, msg = "") {
    setError({ show, msg });
  }

  useEffect(checkRequests, []);

  return (
    <GithubContext.Provider
      value={{
        githubUser,
        repos,
        followers,
        requests,
        error,
        searchUser,
        isLoading,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
}

export { GithubProvider, GithubContext };
