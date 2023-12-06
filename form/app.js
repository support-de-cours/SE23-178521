'use strict';

const months = ['janvier','février','mars','april','mai','juin','juillet','aout','septembre','octobre','novembre','décembre'];


(() => {

    const form = document.querySelector('[rel=js-register-form]');

    // form.addEventListener('submit', function(event){

    //     let errors = [];

    //     Array.from(form, child => {

    //         // Control du champ
    //         if (!checkControl(child))
    //         {
    //             errors.push('Erreur');
    //         }

    //     });

    //     if (errors.length)
    //     {
    //         event.preventDefault();
    //     }
    // });

    // Boucle sur les enfant du formulaire  à l'initialisation du formulaire
    Array.from(form, child => {

        // Add required symbol
        addRequiredSymbol(child);

        // Listen the Blur event
        child.addEventListener("blur", doOnBlur);

    });



    // GENERATE DATE CONTROLS
    // --

    var node_day = form.querySelector('[name="birthday[day]"]');
    var node_month = form.querySelector('[name="birthday[month]"]');
    var node_year = form.querySelector('[name="birthday[year]"]');

    // Generate days list
    for (let i=1; i<=31; i++)
    {
        const node_option = document.createElement('option');
              node_option.value = i;
              node_option.innerText = i;
        node_day.append(node_option);
    }

    // Generate months list


    // Generate years list
    // let date = new Date;





    // console.log(node_day);
    // console.log(node_month);
    // console.log(node_year);



})();

function doOnBlur(event)
{
    const control = event.target;

    // Control du champ
    checkControl(control);
}


// CHECK FORM CONTROL
// --

function checkControl(control)
{
    // Capitalize the control name: firstname -> Firstname
    const name = control.name;
    const firstLetter = name.charAt(0)
    const firstLetterCap = firstLetter.toUpperCase()
    const remainingLetters = name.slice(1)
    const capitalizedName = firstLetterCap + remainingLetters

    // Build the checker method name: checkFirstname
    const checker = `check${capitalizedName}`;

    // Execute and return the control checker
    if (typeof window[checker] === 'function')
    {
        return window[checker](control);
    }
    
    return true;
}

function checkFirstname(control)
{
    const value = control.value;

    control.classList.remove('is-invalid');
    
    if (!/^[a-z-]+$/i.test(value))
    {
        control.classList.add('is-invalid');
        return false;
    }

    return true;
}
function checkLastname(control)
{
    let value = control.value;

    value = value.toUpperCase();
    control.value = value;

    control.classList.remove('is-invalid');
    
    if (!/^[a-z-]+$/i.test(value))
    {
        control.classList.add('is-invalid');
        return false;
    }
    return true;
}
function checkEmail(control)
{
    const value = control.value;

    control.classList.remove('is-invalid');
    
    if (!/^[a-z-]+$/i.test(value))
    {
        control.classList.add('is-invalid');
        return false;
    }

    return true;
}
function checkPassword(control)
{
    const value = control.value;

    // control.classList.remove('is-invalid');

    // Contient au moins un caractères alphabetique minuscule
    // Contient au moins un caractères alphabetique majuscule
    // Contient au moins un caractères numerique
    // Contient au moins un caractères spécial ()[]-_§?!+=/\><
    // Contient au minimum 8 caracteres
    // Contient au maximum 32 caracteres

    // if (!/^[a-z-]+$/i.test(value))
    // {
    //     control.classList.add('is-invalid');
    //     return false;
    // }

    return true;
}
function checkBirthday(control)
{
    return true;
}


// FORM REQUIRED SYMBOL
// --

function addRequiredSymbol(control)
{
    if (control.required)
    {
        let parent = control.parentNode.querySelector('label') ?? control.parentNode.parentNode.parentNode.querySelector('label');
        parent.classList.add('required');
    }
}