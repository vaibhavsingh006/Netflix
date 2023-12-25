

export const handelValidation = (email, password, name, mob) => {

    const isEmailRight = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    // const isNameRight = /^[\w-\.]+&([\w-]+\.)+[\w-]{2,4}$/.test(name);
    // const isMobRight = /^[\w-\.]+&([\w-]+\.)+[\w-]{2,4}$/.test(mob);
    const isPasswordRight = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    // if (!isNameRight) return 'name not correct';
    // if (!isMobRight) return 'mob not correct';
    if (!isEmailRight) return 'email Not  Valid ';
    if (!isPasswordRight) return 'password Not Valid ';

    return null;

}

