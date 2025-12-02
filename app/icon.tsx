import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const size = {
  width: 64,
  height: 64,
}
export const contentType = 'image/png'

export default async function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'white',
        }}
      >
        <div
          style={{
            width: '85%',
            height: '85%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'white',
            borderRadius: '50%',
            padding: '8px',
          }}
        >
          <img
            src="https://jytech.us/_next/image?url=%2Fassets%2Fimages%2Fjytech-logo.png&w=48&q=75"
            alt="Logo"
            style={{
              width: '100%',
              height: '100%',
              borderRadius: '50%',
            }}
          />
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
