import { Button } from '@mui/material';
import { MouseEventHandler } from 'react';
import { BtnStyles } from '../Styles';

export const Btn = (props: { clickHandler: MouseEventHandler<HTMLButtonElement>; text: string; active: boolean; }) => {
    return (
        <Button variant='text' size='small'
            sx={BtnStyles}
            className={props.active ? 'active' : ''}
            onClick={props.clickHandler}>
            {props.text}
        </Button>
    )
}