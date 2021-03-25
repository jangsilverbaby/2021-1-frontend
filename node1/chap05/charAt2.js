let s = "안녕하세요";

for (let i = 0; i < s.length; ++i) {
    console.log("%s %s %s %s %d", s[i], typeof s[i], s.charAt(i), typeof s.charAt(i),s.charCodeAt(i));
} 