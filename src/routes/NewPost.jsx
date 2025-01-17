import React from "react";
import blogFetch from "../axios/config";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./NewPost.css";

const NewPost = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState();
  const [body, setBody] = useState();

  const createPost = async (e) => {
    e.preventDefault();

    const post = { title, body, userId: 1 };

    await blogFetch.post("/posts", {
      body: post,
    });

    navigate("/");
  };

  return (
    <div className="new-post">
      <h2>Inserir Novo Post:</h2>
      <form action="" onSubmit={(e) => createPost(e)}>
        <div className="form-control">
          <label htmlFor="" className="title">
            Título:
          </label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Digite o título"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="" className="body">
            Conteúdo:
          </label>
          <textarea
            name="body"
            id="body"
            placeholder="Digite o Conteudo"
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
        </div>
        <input type="submit" value="Criat Post" className="btn" />
      </form>
    </div>
  );
};

export default NewPost;
