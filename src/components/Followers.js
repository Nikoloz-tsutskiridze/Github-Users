import React, { useContext } from "react";
import styled from "styled-components";
import { GithubContext } from "../context/context";

const Wrapper = styled.article`
  background: var(--clr-white);
  border-radius: var(--radius);
  position: relative;

  &::before {
    content: " followers";
    position: absolute;
    top: 0;
    left: 0;
    transform: translateY(-100%);
    background: var(--clr-white);
    color: var(--clr-grey-5);
    border-top-right-radius: var(--radius);
    border-top-left-radius: var(--radius);
    text-transform: capitalize;
    padding: 0.5rem 1rem 0 1rem;
    letter-spacing: var(--spacing);
    font-size: 1rem;
  }

  .followers {
    height: 260px;
    display: grid;
    grid-template-rows: repeat(auto-fill, minmax(45px, 1fr));
    gap: 1.25rem 1rem;
    padding: 1rem;
    margin: 0;
    overflow-y: auto;
    scrollbar-width: thin;
    scrollbar-color: var(--clr-primary-5) var(--clr-grey-10);

    &::-webkit-scrollbar {
      width: 8px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: var(--clr-primary-5);
      border-radius: var(--radius);
    }
    &::-webkit-scrollbar-track {
      background: var(--clr-grey-10);
    }
  }

  article {
    transition: var(--transition);
    padding: 0.5rem;
    border-radius: var(--radius);
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    column-gap: 1rem;

    img {
      height: 45px;
      width: 45px;
      border-radius: 50%;
      object-fit: cover;
    }

    h4 {
      margin-bottom: 0;
    }

    a {
      color: var(--clr-grey-5);
      word-break: break-all;
    }
  }
`;

function Followers() {
  const { followers } = useContext(GithubContext);

  return (
    <Wrapper>
      <div className="followers">
        {followers.map((follower, index) => {
          const { avatar_url: img, html_url, login } = follower;
          return (
            <article key={index}>
              <img src={img} alt={login} />
              <div>
                <h4>{login}</h4>
                <a href={html_url} target="_blank" rel="noopener noreferrer">
                  {html_url}
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </Wrapper>
  );
}

export default Followers;
