import React from "react";
import styled from "styled-components";
import { Bio } from "../../data/constants";
import { FacebookRounded, LinkedIn } from "@mui/icons-material";

const FooterContainer = styled.div`
    width: 100%;
    padding: 2rem 0;
    display: flex;
    justify-content: center;
    z-index: 10;
    position: relative;
`;
const FooterWrapper = styled.div`
    width: 100%;
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    gap: 14px;
    align-items: center;
    padding: 1rem;
    color: ${({ theme }) => theme.text_primary};
`;
const Logo = styled.div`
    font-weight: 600;
    font-size: 20px;
    color: ${({ theme }) => theme.primary};
`;
const Nav = styled.ul`
    width: 100%;
    max-width: 800px;
    margin-top: 0.5rem;
    display: flex;
    flex-direction: row;
    gap: 2rem;
    justify-content: center;
    @media (max-width: 768px) {
        flex-wrap: wrap;
        gap: 1rem;
        justify-content: center;
        text-align: center;
        font-size: 12px;
    }
`;
const NavLink = styled.a`
    color: ${({ theme }) => theme.text_primary};
    text-decoration: none;
    font-size: 1.2rem;
    transition: color 0.2s ease-in-out;
    &:hover {
        color: ${({ theme }) => theme.primary};
    }
    @media (max-width: 768px) {
        font-size: 1rem;
    }
`;
const SocialMediaIcons = styled.div`
    display: flex;
    margin-top: 1rem;
`;
const SocialMediaIcon = styled.a`
    display: inline-block;
    margin: 0 1rem;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.text_primary};
    transition: color 0.2s ease-in-out;
    &:hover {
        color: ${({ theme }) => theme.primary};
    }
`;
const Copyright = styled.p`
    margin-top: 1.5rem;
    font-size: 0.9rem;
    color: ${({ theme }) => theme.soft2};
    text-align: center;
`;

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrapper>
                <Logo>Manav Dhamani</Logo>
                <Nav>
                    <NavLink href="#About">About</NavLink>
                    <NavLink href="#Skills">Skills</NavLink>
                    <NavLink href="#Experience">Experience</NavLink>
                    <NavLink href="#Projects">Projects</NavLink>
                    <NavLink href="#Education">Education</NavLink>
                </Nav>
                <SocialMediaIcons>
                    <SocialMediaIcon href={Bio.facebook} target="display">
                        <FacebookRounded />
                    </SocialMediaIcon>
                    {/* <SocialMediaIcon href={Bio.twitter} target="display">
                        <Twitter />
                    </SocialMediaIcon> */}
                    
                    <SocialMediaIcon href={Bio.inaturalist} target="display">
                        <svg
                            xmlns="https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/fd/3d/cf/fd3dcf43-dd35-57ee-beb4-6863bacf8607/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/434x0w.webp"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            width="24px"
                            height="24px"
                        >
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm1 8c-.83 0-1.5.67-1.5 1.5S11.17 18 12 18s1.5-.67 1.5-1.5S12.83 15 12 15z" />
                        </svg>
                        </SocialMediaIcon>
                        <SocialMediaIcon href={Bio.linkedin} target="display">
                            <LinkedIn />
                        </SocialMediaIcon>
                </SocialMediaIcons>
                <Copyright>&copy; 2024 Manav Dhamani. All rights reserved.</Copyright>
            </FooterWrapper>
        </FooterContainer>
    );
};

export default Footer;
