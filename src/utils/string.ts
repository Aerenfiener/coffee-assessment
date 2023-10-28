function beautify(s: string): string {
    if (!s) return '';

    return s[0].toLocaleUpperCase() + s.slice(1, s.length - 1);
}

export {
    beautify
}