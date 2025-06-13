import 'vite/client';
import { Component, DefineComponent } from 'vue';
import '@types/google.maps';

export type InertiaPage = DefineComponent & {
  default: {
    layout?: Component;
  };
};

export type MenuItem = {
  label: string;
  href: string;
};

export type MenuItemProps = { active?: boolean; href: string };
