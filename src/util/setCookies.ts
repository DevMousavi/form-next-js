const setCookies = (name: string, token: string): void => {
    document.cookie = `${name}=${token}; max-age=${24 * 60 * 60}; path=/`;
};

export default setCookies;
