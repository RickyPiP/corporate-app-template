/** @jsxImportSource @emotion/react */
import tw from "twin.macro";
import styled from "@emotion/styled";
import AccesBtn from "./homepage-button";
import { Container } from "../container";
import { Main } from "./homepage-main";
import HomepageBtn from "./homepage-button";
import HomepageContent from "./homepage-content";
import { Grid } from "./grid";
import HomepageForm from "./homepage-form";
import HomepagePattern from "./homepage-pattern";
import PricingTitle from "./cards/PricingTitle";
import PricingCard from "./cards/PricingCard";
import PricingCardMain from "./cards/PricingCardMain";
import Testimonial from "../testimonial-page/Testimonial";
import { Angelina } from "../../assets/data";
import { PaddingWrapper } from "../padding-wrapper";
import React, { useEffect, useLayoutEffect, useState, useContext } from "react";
import { AuthContext } from "../../context/auth-context";

const Homepage = () => {
  const { auth } = useContext(AuthContext);
  return (
    <div>
      <Main>
        <HomepagePattern />
        <Grid>
          <Container>
            <PaddingWrapper>
              <HomepageContent />
            </PaddingWrapper>
          </Container>

          {!auth && <HomepageForm />}
        </Grid>
        <PricingTitle />
        <Container>
          <div tw="lg:flex justify-center items-center md:mx-20 ">
            <PricingCard title="Hobby" price="79$" />
            <PricingCardMain title="Growth" price="149$" />
            <PricingCard title="Scale" price="349$" />
          </div>
        </Container>
      </Main>
      <Testimonial proprieties={Angelina} />
    </div>
  );
};

export default Homepage;
