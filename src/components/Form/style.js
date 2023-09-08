import { styled } from 'styled-components';

const theme = {
	bgBlueLight: 'rgba(214, 244, 250, 1)',
	bgBlue: 'rgba(116, 204, 216, 1)',
	bgBlueHover: 'rgb(83, 179, 192)',
	colorLight: 'rgba(66, 119, 129, 1)',
	colorMedium: 'rgba(27, 95, 107, 1)',
	colorGray: 'rgba(183, 184, 197, 1)',
	colorDark: 'rgba(9, 15, 36, 1)',
	colorWhite: 'rgba(255, 255, 255, 1)',
};

export const FormContainer = styled.div`
    display: flex;
    position: relative;
    z-index: 1;
    padding: 61.88px 0 0 0;
    width: 100%;
    background: ${theme.bgBlueLight};
    justify-content: center;

        &::before{
            content: '';
            z-index: -1;
            position: absolute;
            top: -107.5%;
            left: -52px;
            width: 1930px;
            height: 1930px;
            background: ${theme.bgBlueLight};
            border-radius: 50%;
        }
`;

export const FormBody = styled.div`
    display: flex;
    flex-direction: column;
`;

export const FormHeader = styled.div`
    font-family: 'Rubik', sans-serif;
    display: flex;
    margin-bottom: 4.33px;
    justify-content: center;
    align-items: center;
    color: ${theme.colorDark};
    font-size: 28px;
    font-weight: 600;
    column-gap: 15.27px;
    line-height: 1.39;
`;

export const Title = styled.h1`

`;

export const Announcement = styled.p`
    margin-bottom: 14px;
    text-align: center;
    line-height: 1.77;
    color: ${theme.colorMedium};
`;

export const FormMain = styled.form`
    display: flex;
    flex-direction: column;
`;

export const InputItems = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 6.07px;
`;

export const Description = styled.div`
    margin-bottom: 6.07px;
    text-align: center;
    font-size: 12px;
    color: ${theme.colorLight};
    line-height: 1.55;
`;

export const Button = styled.button`
    display: flex;
    column-gap: 6px;
    align-self: center;
    font-weight: 500;
    font-size: 15px;
    line-height: 1.36;
    padding: 13px 30px;
    border: none;
    background: ${theme.bgBlue};
    color: ${theme.colorWhite};
    border-radius: 30px;
    transition: 300ms;

        &:hover{
            background: ${theme.bgBlueHover};
            transition: 300ms;
        }
`;

export const Span = styled.span`
    
`;
