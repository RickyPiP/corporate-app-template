import React, { useState } from "react";
import tw from "twin.macro";
/** @jsxImportSource @emotion/react */
import { useParams } from "react-router-dom";
import { Container } from "../container";
import { PaddingWrapper } from "../padding-wrapper";
import NotFound from "../../assets/not-found";

type BlogProps = {
  data: {
    id: number;
    bgUrl: string;
    type: string;
    title: string;
    text: string;
    avatarUrl: string;
    name: string;
    date: string;
    readTime: string;
  }[];
};

const SingleBlogPage = (props: BlogProps) => {
  const { id } = useParams();
  let index = props.data.findIndex(e => e.id === parseInt(id!));
  let blog = props.data[index];
  if (parseInt(id!) !== index + 1) return <NotFound />;
  return (
    <div tw=" mb-10">
      <Container>
        <PaddingWrapper>
          <div tw="md:grid md:grid-cols-2 md:space-x-20">
            <div tw="max-w-2xl">
              <img src={blog.bgUrl} alt="" tw="rounded-3xl mb-4" />
            </div>
            <div tw="text-white text-left ">
              <h1 tw="text-2xl font-bold">{blog.title}</h1>
              <p tw="text-sm mb-5">
                Written by <span tw="text-indigo-600">{blog.name}</span>
              </p>
              <p>
                <i>{blog.text}</i>
              </p>
            </div>
          </div>
        </PaddingWrapper>
      </Container>
    </div>
  );
};

export default SingleBlogPage;
