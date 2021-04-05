# Course--Cookies

## how to set and get cookies
### get by browser
    document.cookies;

### set by browser
    document.cookies="cookie_name=cookie_value;"

### get by node.js
    req.headers.cookie

### set by node.js
    res.setHeader('set-cookie', ['set_from_server=1']);

---

## cookies property

### Set-Cookie
    The Set-Cookie HTTP response header is used to send a cookie from the server to the user agent,
    `Set-Cookie: flavor=choco; SameSite=None; Secure`


### Expires
    syntal: `Expires=<date>;`
    example: `expires=Tue, 19 Jan 2038 03:14:07 GMT`
    when user is not set the expires, the cookie becomes a session cookie. session mean cookies is removed when browser is closed. we can set either the expires or max-age option.

### Max-Age
    syntal: `Max-Age=<number>;`
    example: `max-age=" + 30*24*60*60;`
    example: `max-age=0;`               -> expire right now
    
    we can set either the expires or max-age option.

### HttpOnly
    syntal: `HttpOnly`
    example: `HttpOnly;`
    Use the HttpOnly attribute to prevent access to cookie values via JavaScript.

### secure
    syntal: `secure`
    example: `secure;`
    The cookie should be transferred only HTTPS.

### SameSite

    SameSite=None
        A cookie with samesite=strict is never sent if the user comes from outside the same site.

    SameSite=Lax
        Cookies are not sent on normal cross-site.
        this mean show when click another link to this site and cookie will be not send.

    SameSite=Strict
        Cookies will only be sent in a first-party and not be sent third party websites.
        this mean does not show when click another link to this site and cookie will be not send.

## Cookie scope
    coolies visible only this scope.

    Domain
        syntal: `domain=domain_name`
        example: `domain=.localhost:8080/;`   -> set for localhost:8080/ or www.localhost:8080/
        example: `domain=localhost:8080/;`   -> only set for localhost:8080/

    Path
        syntal: `path=/path_name`
        example: `path=/path1;`
        example: `path=/path2;`
        
## Default feature
    Defaults to Lax
        Defaults to Lax" feature in the Browser Compatibility.
