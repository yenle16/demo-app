import apiRoutes from "@/config/api-routes";
export type bodyLogin = {
    username: string,
    password: string
}


async function checkUser(code: string, params: any) {
    try {
        const res = await fetch(apiRoutes.check_user + `?lang=${params.lang}&platform=${params.platform}&os=${params.os}`, {
            method: 'POST',
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ code: code })
        });
        console.log("res", apiRoutes.check_user + `?lang=${params.lang}&platform=${params.platform}&os=${params.os}`)
        return res.json();
    } catch (e: any) {
        throw e;
    }
}

async function loginService(body: bodyLogin) {
    try {
        const res = await fetch(apiRoutes.login, {
            method: 'POST',
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        });
        return res.json();
    } catch (e: any) {
        throw e;
    }
}

export { loginService, checkUser }