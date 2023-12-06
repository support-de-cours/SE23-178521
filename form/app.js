'use strict';

(() => {

    const form = document.querySelector('[rel=js-register-form]');

    Array.from(form, child => {
        // Add required symbol
        addRequiredSymbol(child);

        // console.log( child );

    })

})();

function addRequiredSymbol(control)
{
    if (control.required)
    {
        let parent = control.parentNode.querySelector('label') ??  control.parentNode.parentNode.parentNode.querySelector('label');
        parent.classList.add('required');
    }
}