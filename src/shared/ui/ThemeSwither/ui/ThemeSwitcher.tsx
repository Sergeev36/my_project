import {classNames} from "shared/libs/classNames/classNames";
import styles from './ThemeSwitcher.module.scss'
import React from "react";
import {Theme, useTheme} from "app/providers/ThemeProvider";
import {Button, ThemeButton} from "shared/ui/Button/Button";
import LightIcon from "shared/assets/icons/theme-light.svg"
import DarkIcon from "shared/assets/icons/theme-dark.svg"



export interface ThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher = ({className}: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      theme={ThemeButton.CLEAR}
      className={classNames(styles.ThemeSwitcher, {}, [className])}
      onClick={toggleTheme}
    >
      {theme === Theme.DARK ? <DarkIcon/> : <LightIcon/>}
    </Button>

  );
};