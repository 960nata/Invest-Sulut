import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google'

export default function Analytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID

  return (
    <>
      {gaId && <GoogleAnalytics gaId={gaId} />}
      {gtmId && <GoogleTagManager gtmId={gtmId} />}
    </>
  )
}
