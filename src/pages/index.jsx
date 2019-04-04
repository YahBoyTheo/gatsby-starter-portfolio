import React from "react";
import styled from "styled-components";
import tw from "tailwind.macro";
import { Parallax } from "react-spring/renderprops-addons.cjs";

// Components
import Layout from "../components/Layout";
import ProjectCard from "../components/ProjectCard";

// Elements
import Inner from "../elements/Inner";
import { Title, BigTitle, Subtitle } from "../elements/Titles";

// Views
import Hero from "../views/Hero";
import Contact from "../views/Contact";



const ContactText = styled.p`
  ${tw`text-grey-light font-sans text-xl md:text-2xl lg:text-3xl`};
`;

const Footer = styled.footer`
  ${tw`text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg`};
`;

const Index = () => (
  <>
    <Layout />
    <Parallax pages={2}>
      <Hero offset={0}>
        <BigTitle>
          Hi, <br /> I'm Theo.
        </BigTitle>
        <Subtitle>
          A Web Developer and Project Manager specialising in Internal Search.
        </Subtitle>
      </Hero>
      <Contact offset={1}>
        <Inner>
          <Title>Get in touch</Title>
          <ContactText>
            Say <a href="mailto:theo@theoarcher.me">hi</a>, or find me on{" "}
            <a href="https://www.linkedin.com/in/theoarcher/">LinkedIn</a>.
          </ContactText>
        </Inner>
        <Footer>
          &copy; 2019 Theo Archer
        </Footer>
      </Contact>
    </Parallax>
  </>
);

export default Index;
