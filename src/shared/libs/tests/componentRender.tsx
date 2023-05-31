import { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import i18nFortTests from 'shared/configs/i18n/i18nFortTests';
import { MemoryRouter } from 'react-router-dom';

export interface componentRenderOptions {
    route?: string;
}

export function componentRender(
    component: ReactNode,
    options: componentRenderOptions = {},
) {
    const { route = '/' } = options;
    return render(
        <MemoryRouter initialEntries={[route]}>
            <I18nextProvider i18n={i18nFortTests}>
                {component}
            </I18nextProvider>
            ,
        </MemoryRouter>,
    );
}
