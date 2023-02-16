
async function fetchProfileData() {
    const url = 'https://web.dio.me/users/jonathasrosa85?tab=skills';
    const response = await fetch(url)
    const profileData = await response.json()
    return profileData
}
