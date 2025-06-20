export const validateEmail = (email: string): string | null => {
  const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
   
  if (!email.trim()) {
    return 'Email is required';
  } else if (!emailRegex.test(email.trim())) {
    return 'Please enter a valid email';
  }
  return null;
};

export const validPassword = (password:string) : string | null => {
   if (!password.trim()) {
    return 'Password is required';
  } else if (password.trim().length < 6) {
    return 'Password must be at least 6 characters';
  }
  return null;
}

export const validateName = (name:string) => {
  if (!name.trim()) {
    return 'Name is required';
  }
  return null;
};




