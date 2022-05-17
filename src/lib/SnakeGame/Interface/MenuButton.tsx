import '../../../styles/menu.css'
import React, {ReactElement} from 'react'

export const enum menuActions {START_NEW_GAME, PAUSE, PLAY, STOP, GO_TO_MAIN_MENU}
export type OnClickMenuHandler = (e: React.MouseEvent, action: menuActions) => void
export interface IMenuButton {
    action: menuActions,
    onClickMenuHandler: OnClickMenuHandler,
    active?: boolean,
    buttonText?: string,
}

// Default props
const MenuButtonDefaultProps = {
    active: true,
    buttonText: ''
}
export const defaultButtonText = ['NEW GAME', 'PAUSE', 'PLAY', 'STOP', 'MAIN MENU'];

export function MenuButton(props: IMenuButton): ReactElement {
    // set defaults
    props = {...MenuButtonDefaultProps, ...props}
    if (props.buttonText === '') props.buttonText = defaultButtonText[props.action]
    //
    const {action, onClickMenuHandler, active, buttonText} = props
    return <span key={action} className={'menu-button' + (active ? ' active' : '')}
                 onClick={(e) => onClickMenuHandler(e, action)}>{buttonText}</span>
}
