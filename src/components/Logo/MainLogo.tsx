import MainLogoImg from '@/assets/images/apps/logo/main-logo.png';

export function MainLogo() {
    return (
        <img alt='CRM' src={MainLogoImg} style={{ width: '200px', height: '80px', objectFit: 'cover' }} />
    )
}