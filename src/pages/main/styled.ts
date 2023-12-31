import { FaCheck } from 'react-icons/fa';
import { TbRefresh } from 'react-icons/tb';

import styled from '@emotion/styled';
import { Button } from '@mui/material';
import { motion } from 'framer-motion';

import { colors } from '@/styles';

export const MainPageContainer = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  row-gap: 1.4rem;
  @media screen and (min-width: 500px) and (max-width: 850px) {
    width: 70%;
  }
  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;

export const MainPageUploadOptionWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  padding: 0 2rem;
`;

export const MainPageFindContainer = styled(motion.div)`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 0.24fr;
  column-gap: 0.4rem;
  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr 0.3fr;
  }
  @media screen and (max-width: 375px) {
    grid-template-columns: 1fr 0.26fr;
  }
`;

export const MainPageTextWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.secondary};
  border: 0.2rem solid ${colors.softPrimary};
  align-self: center;
  border-radius: 0.8rem;
  height: 3rem;
  padding: 0.3rem;
  overflow: scroll;
  cursor: pointer;
  width: 100%;
  column-gap: 0.4rem;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const MainPageTextButton = styled.button`
  color: ${colors.white};
  border: none;
  background-color: ${colors.softPrimary};
  font-size: 1.1rem;
  font-weight: 600;
  padding: 0.3rem;
  align-self: center;
  justify-self: center;
  border-radius: 0.2rem;
`;

export const MainPageText = styled.span`
  width: 100%;
  font-size: 1.1rem;
  font-weight: 700;
  white-space: nowrap;
  color: #c8beac;
  padding: 0 0.6rem;
  @media screen and (max-width: 500px) {
    font-size: 1rem;
    font-weight: 600;
  }
`;

export const MainPageTextArea = styled.textarea`
  outline: 0;
  background-color: transparent;
  width: 100%;
  font-size: 1.1rem;
  font-weight: 600;
  color: ${colors.white};
  display: flex;
  border: none;
  height: 3rem;
  resize: none;
  padding: 0.6rem;
  max-height: 10rem;
  &::placeholder {
    color: #c8beac;
  }
  &::-webkit-scrollbar {
    z-index: 999;
    width: 0.4rem;
  }
  &::-webkit-scrollbar-track {
    background-color: transparent;
    border-radius: 1rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #4f4f4f;
    border-radius: 1rem;
  }
  @media screen and (min-width: 700px) and (max-width: 1000px) {
    max-height: 8rem;
  }
  @media screen and (max-width: 500px) {
    max-height: 8rem;
    font-size: 1rem;
    font-weight: 600;
  }
`;

export const MainPageFindFileButton = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  height: 3rem;
  font-size: 1.1rem;
  font-weight: 600;
  background-color: ${colors.primary};
  border-radius: 0.8rem;
  margin-top: 0;
  .MuiTouchRipple-root {
    filter: blur(5px) !important;
  }
  &:hover {
    background-color: ${colors.primary};
  }
  @media screen and (max-width: 500px) {
    font-size: 1rem;
    font-weight: 600;
  }
`;

export const MainPageUploadButton = styled(Button)`
  margin-top: 1.5rem;
  border: none;
  width: 7.6rem;
  height: 3rem;
  font-size: 1.1rem;
  font-weight: 600;
  color: ${colors.white};
  background-color: ${colors.primary};
  border-radius: 0.8rem;
  .MuiTouchRipple-root {
    filter: blur(5px) !important;
  }
  &:hover {
    background-color: ${colors.primary};
  }
  @media screen and (max-width: 500px) {
    margin: 0;
  }
`;

export const MainPageSwitchButtonWrapper = styled(MainPageUploadButton)`
  margin-top: 0;
  width: 2.6rem;
  height: 100%;
`;

export const MainPageUploadOption = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 0.6rem;
`;

export const MainPageOptionName = styled.span`
  font-size: 1.2rem;
  font-weight: 700;
  @media screen and (min-width: 380px) and (max-width: 500px) {
    font-size: 1rem;
  }
`;

export const MainPageCheckBox = styled.div`
  width: 2.6rem;
  height: 2.6rem;
  background-color: ${colors.secondary};
  border-radius: 0.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 500px) {
    width: 2rem;
    height: 2rem;
  }
`;

export const MainPageCheckIcon = styled(FaCheck)`
  width: 1.6rem;
  height: 1.6rem;
  @media screen and (max-width: 500px) {
    width: 1rem;
    height: 1rem;
  }
`;

export const MainPageChangeIcon = styled(TbRefresh)`
  width: 1.6rem;
  height: 1.6rem;
`;
