import { Button } from '@mui/material';
import { MouseEventHandler } from 'react';
import { BtnStyles } from '../Styles';

export const Btn = (props: { clickHandler: MouseEventHandler<HTMLButtonElement>; text: string; }) => {
    return (
        <Button variant='text' size='small'
            sx={BtnStyles}
            onClick={props.clickHandler}>
            {props.text}
        </Button>
    )
}