import React from "react";
/** @jsxImportSource @emotion/react */
import tw from "twin.macro";
import { Container } from "../container";
import Content from "../content";
import LoginModal from "../modals/login-modal";
import { PaddingWrapper } from "../padding-wrapper";
import BlogElement from "./blog-element";

const Blog = () => {
  return (
    <div tw="mb-40 ">
      <Container>
        <PaddingWrapper>
          <Content
            title="From the blog"
            text="Lorem ipsum dolores idealogies."
            primary
          />
          <BlogElement />
        </PaddingWrapper>
      </Container>
    </div>
  );
};

export default Blog;
