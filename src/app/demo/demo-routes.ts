import { Routes } from '@angular/router';
import { ColorDemoComponent } from 'app/lib/color-demo/color-demo.component';
import { SelectDemoComponent } from 'app/lib/select/select-demo/select-demo.component';
import { DemoComponent } from 'app/demo/demo.component';
import { ButtonDemoComponent } from 'app/lib/button/button-demo/button-demo.component';
import { CheckboxDemoComponent } from 'app/lib/checkbox/checkbox-demo/checkbox-demo.component';
import { RadioButtonDemoComponent } from 'app/lib/radio-button/radio-button-demo/radio-button-demo.component';

export const routes: Routes = [
    {
        path: 'demo',
        component: DemoComponent,
        children: [
            {
                path: 'color',
                component: ColorDemoComponent
            },
            {
                path: 'button',
                component: ButtonDemoComponent
            },
            {
                path: 'select',
                component: SelectDemoComponent
            },
            {
                path: 'checkbox',
                component: CheckboxDemoComponent
            },
            {
                path: 'radio-button',
                component: RadioButtonDemoComponent
            }
        ]
    }
];
