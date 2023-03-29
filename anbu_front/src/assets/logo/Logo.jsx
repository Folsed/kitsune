import { Anbu } from './anbu'
import styles from './../../components/header/header.module.css'

export const Logo = () => {
    return (
        <>
            <svg viewBox="110 220 724 368" height="50" version="1.1">
                <g id="logo-group">
                    <g id="logo-center" transform="translate(163.4715624999999 0)">
                        <g id="slogan" transform="translate(0 0)" />
                        <g id="title"  transform="translate(0 0)">
                            <path className={styles.logoSvg} id="path338050"    
                                d="m 463.12156,2.52 h 11.952 l -21.312,-56.16 h -9.792 l -21.24,56.16 h 11.952 l 4.536,-12.456 h 19.296 z m -8.424,-22.968 h -11.664 l 5.832,-15.912 z"
                                strokeWidth={0}
                                strokeLinejoin="miter"
                                strokeMiterlimit={2}
                                fill="#ff7b00"
                                stroke="#ff7b00"
                                transform="translate(0 346.537) translate(184.25 -30.891999999999996) scale(2.5) translate(-405.2375 53.928)">
                            </path>
                            <path className={styles.logoSvg} id="path338052"
                                d="m 507.16981,-31.608 c -3.456,-3.384 -7.992,-5.256 -12.816,-5.256 -2.592,0 -5.04,0.504 -7.272,1.512 v -2.664 h -10.8 v 17.64 c -0.072,0.576 -0.072,1.08 -0.072,1.656 h 0.072 V 2.52 h 10.8 V -19.8 c 0.504,-3.528 3.528,-6.264 7.272,-6.264 4.032,0 7.344,3.312 7.344,7.344 V 2.52 h 10.8 v -21.24 c 0,-4.896 -1.944,-9.432 -5.328,-12.888 z" strokeWidth={0}
                                strokeLinejoin="miter"
                                strokeMiterlimit={2}
                                fill="#ff7b00"
                                stroke="#eecd4c"
                                transform="translate(0 346.537) translate(331.3437499999999 -30.891999999999996) scale(2.5) translate(-464.075 53.928)">
                            </path>
                            <path className={styles.logoSvg} id="path338054"
                                d="m 558.51819,-17.496 c 0,-2.808 -0.576,-5.472 -1.656,-7.992 -1.008,-2.448 -2.52,-4.68 -4.392,-6.552 -1.872,-1.872 -4.032,-3.384 -6.48,-4.392 -2.592,-1.08 -5.256,-1.584 -7.992,-1.584 -2.808,0 -5.472,0.504 -7.992,1.584 -0.648,0.288 -1.224,0.504 -1.728,0.864 v -20.52 l -10.8,3.6 v 34.992 c 0,2.736 0.504,5.472 1.584,7.992 1.008,2.448 2.52,4.608 4.392,6.48 1.872,1.944 4.104,3.384 6.552,4.392 2.52,1.08 5.184,1.656 7.992,1.656 2.736,0 5.4,-0.576 7.992,-1.656 2.376,-1.008 4.608,-2.52 6.48,-4.392 1.872,-1.872 3.384,-4.032 4.392,-6.48 1.08,-2.592 1.656,-5.256 1.656,-7.992 z m -10.8,0 c 0,5.328 -4.392,9.72 -9.72,9.72 -5.4,0 -9.72,-4.392 -9.72,-9.72 0,-5.4 4.32,-9.72 9.72,-9.72 5.328,0 9.72,4.32 9.72,9.72 z" strokeWidth={0}
                                strokeLinejoin="miter"
                                strokeMiterlimit={2}
                                fill="#ff7b00"
                                stroke="#ebd993"
                                transform="translate(0 346.537) translate(474.7812500000001 -30.891999999999996) scale(2.5) translate(-521.45 53.928)">
                            </path>
                            <path className={styles.logoSvg} id="path338056"
                                d="m 578.91444,3.024 c 4.824,0 9.36,-1.872 12.744,-5.256 3.384,-3.384 5.256,-7.92 5.256,-12.744 v -22.608 h -10.8 v 22.608 c 0,3.96 -3.24,7.2 -7.2,7.2 -3.96,0 -7.2,-3.24 -7.2,-7.2 v -22.608 h -10.8 v 22.608 c 0,4.824 1.872,9.36 5.256,12.744 3.384,3.384 7.92,5.256 12.744,5.256 z"
                                strokeWidth={0}
                                strokeLinejoin="miter"
                                strokeMiterlimit={2}
                                fill="#ff7b00"
                                stroke="#e7e5d9"
                                transform="translate(0 346.537) translate(602.0468750000002 -30.891999999999996) scale(2.5) translate(-572.35625 53.928)">
                            </path>
                        </g>
                        {/* <image xlinkHref={logo} id="icon" x={-70} y={250} height={275} /> */}
                        <Anbu />
                    </g>
                </g>
            </svg>
        </>
    )
}
