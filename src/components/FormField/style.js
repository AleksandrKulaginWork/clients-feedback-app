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

export const Input = styled.input`
    border-radius: 40px;
    outline: none;
    border: 1px solid ${theme.bgBlue};
    padding: 11.5px 20px;

        &::placeholder{
            font-size: 14px;
            line-height: 1.36;
            color: ${theme.colorGray};
        }
`;

export const Textarea = styled.textarea`
    border-radius: 40px;
    outline: none;
    border: 1px solid ${theme.bgBlue};
    padding: 11.5px 20px;
    resize: none;
    min-height: 130px;
    border-radius: 20px;

    &::placeholder{
            font-size: 14px;
            line-height: 1.36;
            color: ${theme.colorGray};
        }
`;

export const Label = styled.label`
    display: flex;
    margin-bottom: 14px;
    justify-content: center;
    font-size: 14px;
    column-gap: 8.69px;
    line-height: 1.55;
    padding: 0 11.5px;
    color: ${theme.colorDark};
`;

export const CheckboxInput = styled.input`

`;

export const Text = styled.p`
    
`;

export const Span = styled.span`
    font-weight: 700;
`;

export const RemoveError = styled.div`
    height: 12px;
`;

export const ShowError = styled(RemoveError)`
    height: 12px;
    font-size: 11px;
    color: red;
    display: flex;
    align-items: center;
    align-self: flex-end;
`;
