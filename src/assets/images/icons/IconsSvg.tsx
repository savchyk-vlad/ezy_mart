import * as React from 'react';
import { View } from 'react-native';
import Svg, { SvgProps, Path, Circle } from 'react-native-svg';
import { ThemeColors } from '~assets/theme';

type IconType = {
  color?: string;
  focused?: boolean;
};

const RightArrowIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M14.43 5.93 20.5 12l-6.07 6.07M3.5 12h16.83"
    />
  </Svg>
);

const EnvelopeIcon = (props: SvgProps) => (
  <Svg width="20" height="17" viewBox="0 0 20 17" {...props}>
    <Path
      d="M16 16.75H4C1.582 16.75 0.25 15.418 0.25 13V4C0.25 1.582 1.582 0.25 4 0.25H16C18.418 0.25 19.75 1.582 19.75 4V13C19.75 15.418 18.418 16.75 16 16.75ZM4 1.75C2.423 1.75 1.75 2.423 1.75 4V13C1.75 14.577 2.423 15.25 4 15.25H16C17.577 15.25 18.25 14.577 18.25 13V4C18.25 2.423 17.577 1.75 16 1.75H4ZM11.0291 9.179L15.9409 5.60699C16.2759 5.36399 16.35 4.89401 16.106 4.55901C15.863 4.22501 15.3951 4.149 15.0581 4.394L10.146 7.966C10.058 8.03 9.94103 8.03 9.85303 7.966L4.94092 4.394C4.60292 4.149 4.13607 4.22601 3.89307 4.55901C3.64907 4.89401 3.72311 5.36299 4.05811 5.60699L8.96997 9.17999C9.27797 9.40399 9.63902 9.515 9.99902 9.515C10.359 9.515 10.7221 9.403 11.0291 9.179Z"
      fill="#A7A8AC"
      {...props}
    />
  </Svg>
);

const LockIcon = (props: SvgProps) => (
  <Svg width="16" height="20" viewBox="0 0 16 20" fill="none" {...props}>
    <Path
      d="M12.75 6.30396V5C12.75 2.381 10.619 0.25 8 0.25C5.381 0.25 3.25 2.381 3.25 5V6.30396C1.312 6.56096 0.25 7.846 0.25 10V16C0.25 18.418 1.582 19.75 4 19.75H12C14.418 19.75 15.75 18.418 15.75 16V10C15.75 7.847 14.688 6.56195 12.75 6.30396ZM8 1.75C9.792 1.75 11.25 3.208 11.25 5V6.25H4.75V5C4.75 3.208 6.208 1.75 8 1.75ZM14.25 16C14.25 17.577 13.577 18.25 12 18.25H4C2.423 18.25 1.75 17.577 1.75 16V10C1.75 8.423 2.423 7.75 4 7.75H12C13.577 7.75 14.25 8.423 14.25 10V16ZM9.27002 12C9.27002 12.412 9.058 12.7601 8.75 12.9871V15C8.75 15.414 8.414 15.75 8 15.75C7.586 15.75 7.25 15.414 7.25 15V12.9619C6.962 12.7329 6.76489 12.395 6.76489 12C6.76489 11.31 7.32001 10.75 8.01001 10.75H8.02002C8.71002 10.75 9.27002 11.31 9.27002 12Z"
      fill="#A7A8AC"
      {...props}
    />
  </Svg>
);

const AppleIcon = (props: SvgProps) => (
  <Svg width="20" height="24" viewBox="0 0 20 24" fill="none" {...props}>
    <Path
      d="M14.7729 0.0120105C14.7219 -0.0449895 12.8844 0.0345106 11.2854 1.77001C9.68639 3.50401 9.93239 5.49301 9.96839 5.54401C10.0044 5.59501 12.2484 5.67451 13.6809 3.65701C15.1134 1.63951 14.8239 0.0705105 14.7729 0.0120105ZM19.7439 17.6115C19.6719 17.4675 16.2564 15.7605 16.5744 12.4785C16.8924 9.19501 19.0869 8.29501 19.1214 8.19751C19.1559 8.10001 18.2259 7.01251 17.2404 6.46201C16.5168 6.07389 15.716 5.85152 14.8959 5.81101C14.7339 5.80651 14.1714 5.66851 13.0149 5.98501C12.2529 6.19351 10.5354 6.86851 10.0629 6.89551C9.58889 6.92251 8.17889 6.11251 6.66239 5.89801C5.69189 5.71051 4.66289 6.09451 3.92639 6.39001C3.19139 6.68401 1.79339 7.52101 0.815389 9.74551C-0.162611 11.9685 0.348889 15.4905 0.714889 16.5855C1.08089 17.679 1.65239 19.4715 2.62439 20.7795C3.48839 22.2555 4.63439 23.28 5.11289 23.628C5.59139 23.976 6.94139 24.207 7.87739 23.7285C8.63039 23.2665 9.98939 23.001 10.5264 23.0205C11.0619 23.04 12.1179 23.2515 13.1994 23.829C14.0559 24.1245 14.8659 24.0015 15.6774 23.6715C16.4889 23.34 17.6634 22.083 19.0344 19.5345C19.5549 18.3495 19.7919 17.709 19.7439 17.6115Z"
      fill="black"
    />
  </Svg>
);

const FacebookIcon = (props: SvgProps) => (
  <Svg width="11" height="18" viewBox="0 0 11 18" fill="none" {...props}>
    <Path
      d="M6.72854 10.8578H9.98512L10.4966 7.54965H6.72854V5.74142C6.72854 4.36731 7.17777 3.14861 8.46316 3.14861H10.5287V0.261991C10.1657 0.212916 9.3981 0.105957 7.94787 0.105957C4.91905 0.105957 3.14354 1.7053 3.14354 5.34944V7.55028H0.0297852V10.8584H3.14291V19.9512C3.75949 20.043 4.38426 20.106 5.02538 20.106C5.60485 20.106 6.17047 20.0531 6.72854 19.9776V10.8578Z"
      fill="white"
    />
  </Svg>
);

const GoogleIcon = (props: SvgProps) => (
  <Svg width="100" height="100" viewBox="0 0 48 48" {...props}>
    <Path
      fill="#FFC107"
      d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></Path>
    <Path
      fill="#FF3D00"
      d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></Path>
    <Path
      fill="#4CAF50"
      d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></Path>
    <Path
      fill="#1976D2"
      d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></Path>
  </Svg>
);

const SuccessIcon = (props: SvgProps) => (
  <Svg width="14" height="10" viewBox="0 0 14 10" fill="none" {...props}>
    <Path
      d="M1.6665 5L5.6665 9L12.3332 1"
      stroke="#13B97D"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </Svg>
);

const EyeIcon = (props: SvgProps) => (
  <Svg
    width="24"
    height="24"
    fill-rule="evenodd"
    clip-rule="evenodd"
    {...props}>
    <Path d="M12.01 20c-5.065 0-9.586-4.211-12.01-8.424 2.418-4.103 6.943-7.576 12.01-7.576 5.135 0 9.635 3.453 11.999 7.564-2.241 4.43-6.726 8.436-11.999 8.436zm-10.842-8.416c.843 1.331 5.018 7.416 10.842 7.416 6.305 0 10.112-6.103 10.851-7.405-.772-1.198-4.606-6.595-10.851-6.595-6.116 0-10.025 5.355-10.842 6.584zm10.832-4.584c2.76 0 5 2.24 5 5s-2.24 5-5 5-5-2.24-5-5 2.24-5 5-5zm0 1c2.208 0 4 1.792 4 4s-1.792 4-4 4-4-1.792-4-4 1.792-4 4-4z" />
  </Svg>
);

const EyeSlashIcon = (props: SvgProps) => (
  <Svg
    width="24"
    height="24"
    fill-rule="evenodd"
    clip-rule="evenodd"
    {...props}>
    <Path d="M8.137 15.147c-.71-.857-1.146-1.947-1.146-3.147 0-2.76 2.241-5 5-5 1.201 0 2.291.435 3.148 1.145l1.897-1.897c-1.441-.738-3.122-1.248-5.035-1.248-6.115 0-10.025 5.355-10.842 6.584.529.834 2.379 3.527 5.113 5.428l1.865-1.865zm6.294-6.294c-.673-.53-1.515-.853-2.44-.853-2.207 0-4 1.792-4 4 0 .923.324 1.765.854 2.439l5.586-5.586zm7.56-6.146l-19.292 19.293-.708-.707 3.548-3.548c-2.298-1.612-4.234-3.885-5.548-6.169 2.418-4.103 6.943-7.576 12.01-7.576 2.065 0 4.021.566 5.782 1.501l3.501-3.501.707.707zm-2.465 3.879l-.734.734c2.236 1.619 3.628 3.604 4.061 4.274-.739 1.303-4.546 7.406-10.852 7.406-1.425 0-2.749-.368-3.951-.938l-.748.748c1.475.742 3.057 1.19 4.699 1.19 5.274 0 9.758-4.006 11.999-8.436-1.087-1.891-2.63-3.637-4.474-4.978zm-3.535 5.414c0-.554-.113-1.082-.317-1.562l.734-.734c.361.69.583 1.464.583 2.296 0 2.759-2.24 5-5 5-.832 0-1.604-.223-2.295-.583l.734-.735c.48.204 1.007.318 1.561.318 2.208 0 4-1.792 4-4z" />
  </Svg>
);

const BackArrowIcon = (props: SvgProps) => (
  <Svg
    clip-rule="evenodd"
    fill-rule="evenodd"
    stroke-linejoin="round"
    stroke-miterlimit="2"
    viewBox="0 0 24 24"
    {...props}>
    <Path
      d="m9.474 5.209s-4.501 4.505-6.254 6.259c-.147.146-.22.338-.22.53s.073.384.22.53c1.752 1.754 6.252 6.257 6.252 6.257.145.145.336.217.527.217.191-.001.383-.074.53-.221.293-.293.294-.766.004-1.057l-4.976-4.976h14.692c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-14.692l4.978-4.979c.289-.289.287-.761-.006-1.054-.147-.147-.339-.221-.53-.221-.191-.001-.38.071-.525.215z"
      fill-rule="nonzero"
      {...props}
    />
  </Svg>
);

const UserIcon = (props: SvgProps) => (
  <Svg width="16" height="20" viewBox="0 0 16 20" fill="none" {...props}>
    <Path
      d="M8.00903 8.75C5.66503 8.75 3.75903 6.843 3.75903 4.5C3.75903 2.157 5.66503 0.25 8.00903 0.25C10.353 0.25 12.259 2.157 12.259 4.5C12.259 6.843 10.353 8.75 8.00903 8.75ZM8.00903 1.75C6.49203 1.75 5.25903 2.983 5.25903 4.5C5.25903 6.017 6.49203 7.25 8.00903 7.25C9.52603 7.25 10.759 6.017 10.759 4.5C10.759 2.983 9.52503 1.75 8.00903 1.75ZM11.9969 19.75H4.00305C1.58305 19.75 0.25 18.425 0.25 16.019C0.25 13.358 1.756 10.25 6 10.25H10C14.244 10.25 15.75 13.357 15.75 16.019C15.75 18.425 14.4169 19.75 11.9969 19.75ZM6 11.75C2.057 11.75 1.75 15.017 1.75 16.019C1.75 17.583 2.42405 18.25 4.00305 18.25H11.9969C13.5759 18.25 14.25 17.583 14.25 16.019C14.25 15.018 13.943 11.75 10 11.75H6Z"
      fill="#A7A8AC"
      {...props}
    />
  </Svg>
);

const BadgeCheckIcon = (props: SvgProps) => (
  <View
    style={{
      width: 90,
      height: 90,
      borderRadius: 100,
      backgroundColor: '#4C46B8',
      justifyContent: 'center',
      alignItems: 'center',
      shadowColor: '#4C46B8',
      shadowOffset: { width: 0, height: 16 },
      shadowOpacity: 0.8,
      shadowRadius: 20,
    }}>
    <Svg width="51" height="51" viewBox="0 0 51 51" fill="none" {...props}>
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M42.7588 20.9951L41.8219 20.058C41.2248 19.4609 40.8888 18.6491 40.8888 17.8034V16.4837C40.8888 12.9647 38.0372 10.113 34.5182 10.113H33.1987C32.3529 10.113 31.5432 9.77726 30.944 9.18014L30.0068 8.24299C27.5184 5.75462 23.4851 5.75462 20.9968 8.24299L20.0596 9.18014C19.4624 9.77726 18.6509 10.113 17.8051 10.113H16.4856C12.9666 10.113 10.1147 12.9647 10.1147 16.4837V17.8034C10.1147 18.6491 9.77903 19.4587 9.18191 20.058L8.2447 20.9951C5.75632 23.4835 5.75632 27.5167 8.2447 30.0051L9.18191 30.9423C9.77903 31.5394 10.1147 32.3511 10.1147 33.1969V34.5165C10.1147 38.0355 12.9666 40.8872 16.4856 40.8872H17.8051C18.6509 40.8872 19.4603 41.223 20.0596 41.8201L20.9968 42.7572C23.4851 45.2456 27.5184 45.2456 30.0068 42.7572L30.944 41.8201C31.5411 41.223 32.3529 40.8872 33.1987 40.8872H34.5182C38.0372 40.8872 40.8888 38.0355 40.8888 34.5165V33.1969C40.8888 32.3511 41.2248 31.5415 41.8219 30.9423L42.7588 30.0051C45.2472 27.5167 45.2472 23.4835 42.7588 20.9951ZM33.001 22.3764L24.501 30.8764C24.1908 31.1866 23.7827 31.3439 23.3747 31.3439C22.9667 31.3439 22.5586 31.1887 22.2484 30.8764L17.9984 26.6264C17.3758 26.0037 17.3758 24.9944 17.9984 24.3717C18.621 23.7491 19.6305 23.7491 20.2531 24.3717L23.3768 27.4955L30.7505 20.1217C31.3731 19.4991 32.3825 19.4991 33.0052 20.1217C33.6235 20.7444 33.6236 21.7559 33.001 22.3764Z"
        fill="white"
        {...props}
      />
    </Svg>
  </View>
);

const TabChatIcon = ({ focused }: IconType) => (
  <Svg
    width="25"
    height="24"
    viewBox="0 0 25 24"
    fill={focused ? '#4C46B8' : 'none'}>
    <Path
      d="M18.9698 16.83L19.3598 19.99C19.4598 20.82 18.5698 21.4 17.8598 20.97L13.6698 18.48C13.2098 18.48 12.7599 18.45 12.3199 18.39C13.0599 17.52 13.4998 16.42 13.4998 15.23C13.4998 12.39 11.0398 10.09 7.99985 10.09C6.83985 10.09 5.76985 10.42 4.87985 11C4.84985 10.75 4.83984 10.5 4.83984 10.24C4.83984 5.68999 8.78985 2 13.6698 2C18.5498 2 22.4998 5.68999 22.4998 10.24C22.4998 12.94 21.1098 15.33 18.9698 16.83Z"
      stroke={focused ? '#FFFFFF' : '#616161'}
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <Path
      d="M13.5 15.23C13.5 16.42 13.06 17.5201 12.32 18.3901C11.33 19.5901 9.76 20.36 8 20.36L5.39 21.91C4.95 22.18 4.39 21.81 4.45 21.3L4.7 19.3301C3.36 18.4001 2.5 16.91 2.5 15.23C2.5 13.47 3.44 11.9201 4.88 11.0001C5.77 10.4201 6.84 10.0901 8 10.0901C11.04 10.0901 13.5 12.39 13.5 15.23Z"
      stroke={focused ? '#FFFFFF' : '#616161'}
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </Svg>
);

const TabFavoritesIcon = ({ focused }: IconType) => (
  <Svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill={focused ? '#4C46B8' : 'none'}>
    <Path
      d="M19.86 8.09009C19.86 8.51009 19.83 8.92009 19.78 9.31009C19.32 9.11009 18.82 9.00009 18.29 9.00009C17.07 9.00009 15.99 9.59008 15.32 10.4901C14.64 9.59008 13.56 9.00009 12.34 9.00009C10.29 9.00009 8.63 10.6701 8.63 12.7401C8.63 15.4201 10.05 17.4701 11.63 18.8601C11.58 18.8901 11.53 18.9001 11.48 18.9201C11.18 19.0301 10.68 19.0301 10.38 18.9201C7.79 18.0301 2 14.3501 2 8.09009C2 5.33009 4.21999 3.1001 6.95999 3.1001C8.58999 3.1001 10.03 3.88009 10.93 5.09009C11.84 3.88009 13.28 3.1001 14.9 3.1001C17.64 3.1001 19.86 5.33009 19.86 8.09009Z"
      stroke={focused ? '#FFFFFF' : '#616161'}
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <Path
      d="M21.9999 12.74C21.9999 17.42 17.6699 20.18 15.7299 20.84C15.4999 20.92 15.1299 20.92 14.8999 20.84C14.0699 20.56 12.7999 19.89 11.6299 18.86C10.0499 17.47 8.62988 15.42 8.62988 12.74C8.62988 10.67 10.2899 9 12.3399 9C13.5599 9 14.6399 9.58999 15.3199 10.49C15.9899 9.58999 17.0699 9 18.2899 9C18.8199 9 19.3199 9.11 19.7799 9.31C21.0899 9.89 21.9999 11.2 21.9999 12.74Z"
      stroke={focused ? '#FFFFFF' : '#616161'}
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </Svg>
);

const TabTrendingIcon = ({ focused }: IconType) => (
  <Svg
    width="23"
    height="22"
    viewBox="0 0 23 22"
    fill={focused ? '#4C46B8' : 'none'}>
    <Path
      d="M13.2299 2.50989L14.9899 6.02989C15.2299 6.51989 15.8699 6.98989 16.4099 7.07989L19.5999 7.60989C21.6399 7.94989 22.1199 9.42989 20.6499 10.8899L18.1699 13.3699C17.7499 13.7899 17.5199 14.5999 17.6499 15.1799L18.3599 18.2499C18.9199 20.6799 17.6299 21.6199 15.4799 20.3499L12.4899 18.5799C11.9499 18.2599 11.0599 18.2599 10.5099 18.5799L7.51991 20.3499C5.37991 21.6199 4.07991 20.6699 4.63991 18.2499L5.34991 15.1799C5.47991 14.5999 5.24991 13.7899 4.82991 13.3699L2.34991 10.8899C0.889909 9.42989 1.35991 7.94989 3.39991 7.60989L6.58991 7.07989C7.11991 6.98989 7.75991 6.51989 7.99991 6.02989L9.75991 2.50989C10.7199 0.599893 12.2799 0.599893 13.2299 2.50989Z"
      stroke={focused ? '#4C46B8' : '#616161'}
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </Svg>
);

const TabHomeIcon = ({ focused }: IconType) => (
  <Svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill={focused ? '#4C46B8' : 'none'}>
    <Path d="M12 18V15V18Z" fill="#FFF" />
    <Path
      d="M12 18V15"
      stroke={focused ? '#FFFFFF' : '#616161'}
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <Path
      d="M10.0698 2.82009L3.13978 8.37009C2.35978 8.99009 1.85978 10.3001 2.02978 11.2801L3.35978 19.2401C3.59978 20.6601 4.95978 21.8101 6.39978 21.8101H17.5998C19.0298 21.8101 20.3998 20.6501 20.6398 19.2401L21.9698 11.2801C22.1298 10.3001 21.6298 8.99009 20.8598 8.37009L13.9298 2.83009C12.8598 1.97009 11.1298 1.97009 10.0698 2.82009Z"
      stroke={focused ? '#4C46B8' : '#616161'}
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </Svg>
);

const TabProfileIcon = ({ focused }: IconType) => {
  return (
    <Svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill={focused ? '#4C46B8' : 'none'}>
      <Path
        d="M12.6601 10.87C12.5601 10.86 12.4401 10.86 12.3301 10.87C9.95006 10.79 8.06006 8.84 8.06006 6.44C8.06006 3.99 10.0401 2 12.5001 2C14.9501 2 16.9401 3.99 16.9401 6.44C16.9301 8.84 15.0401 10.79 12.6601 10.87Z"
        stroke={focused ? '#4C46B8' : '#616161'}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M7.66021 14.56C5.24021 16.18 5.24021 18.82 7.66021 20.43C10.4102 22.27 14.9202 22.27 17.6702 20.43C20.0902 18.81 20.0902 16.17 17.6702 14.56C14.9302 12.73 10.4202 12.73 7.66021 14.56Z"
        stroke={focused ? '#4C46B8' : '#616161'}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

const BurgerIcon = (props: SvgProps) => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M3 7H21"
        stroke="#23262F"
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <Path
        d="M3 12H21"
        stroke="#23262F"
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <Path
        d="M3 17H21"
        stroke="#23262F"
        stroke-width="1.5"
        stroke-linecap="round"
      />
    </Svg>
  );
};

const BellIcon = (props: SvgProps) => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke="#23262F"
        d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
      />
      <Circle cx="22" cy="2" r="2" fill="#E53935" />
    </Svg>
  );
};

const CartIcon = (props: SvgProps) => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M7.5 7.67001V6.70001C7.5 4.45001 9.31 2.24001 11.56 2.03001C14.24 1.77001 16.5 3.88001 16.5 6.51001V7.89001"
        stroke="#23262F"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M8.99983 22H14.9998C19.0198 22 19.7398 20.39 19.9498 18.43L20.6998 12.43C20.9698 9.99 20.2698 8 15.9998 8H7.99983C3.72983 8 3.02983 9.99 3.29983 12.43L4.04983 18.43C4.25983 20.39 4.97983 22 8.99983 22Z"
        stroke="#23262F"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M15.4955 12H15.5045"
        stroke="#23262F"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M8.49451 12H8.50349"
        stroke="#23262F"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Circle cx="22" cy="2" r="2" fill="#E53935" />
    </Svg>
  );
};

const NoImage = (props: SvgProps) => {
  return (
    <Svg width="56" height="54" viewBox="0 0 56 54" fill="none">
      <Path
        d="M0.9185 48H2.3815V42.621L6.16 48H7.546V40.2725H6.083V45.4975L2.42 40.2725H0.9185V48ZM12.9308 48.132C15.1803 48.132 16.9293 46.3555 16.9293 44.128C16.9293 41.8895 15.1803 40.135 12.9308 40.135C10.6813 40.135 8.93234 41.8895 8.93234 44.128C8.93234 46.3555 10.6813 48.132 12.9308 48.132ZM10.4448 44.1335C10.4448 42.6815 11.5833 41.565 12.9308 41.565C14.2783 41.565 15.4168 42.676 15.4168 44.1335C15.4168 45.5855 14.2838 46.702 12.9308 46.702C11.5888 46.702 10.4448 45.5855 10.4448 44.1335ZM20.9419 48H22.4324V40.2725H20.9419V48ZM23.8045 48H25.306L25.889 42.6595L27.6435 48H28.936L30.6905 42.6595L31.2515 48.0055H32.7585L31.8125 40.2725H30.1295L28.2815 45.921L26.428 40.2725H24.745L23.8045 48ZM33.3133 48H34.8588L35.3978 46.515H38.6208L39.1653 48H40.7053L37.6748 40.2615H36.3548L33.3133 48ZM35.8653 45.2445L36.9378 42.2965L37.0093 42.0325L37.0808 42.2965L38.1588 45.2445H35.8653ZM44.8674 48.1375C45.8409 48.1375 46.7979 47.8185 47.5019 47.274V44.469H46.0884V46.4875C45.7034 46.658 45.2854 46.7405 44.8674 46.7405C43.5254 46.7405 42.3759 45.58 42.3759 44.128C42.3759 42.6815 43.5199 41.5595 44.8674 41.5595C45.5274 41.5595 46.1434 41.84 46.5944 42.214L47.4689 41.081C46.7814 40.487 45.8684 40.1295 44.8674 40.1295C42.6179 40.1295 40.8689 41.895 40.8689 44.1225C40.8689 46.35 42.6179 48.1375 44.8674 48.1375ZM48.979 48H54.578V46.636H50.4695V44.7165H53.687V43.4295H50.4695V41.6365H54.4955V40.2725H48.979V48Z"
        fill="#8E91AE"
      />
      <Path
        d="M26.8394 26.7189C24.2993 26.7189 22.9785 25.8012 22.9785 23.9657C22.9785 21.8242 24.5025 20.9065 27.7538 20.9065H31.4115C31.6147 20.9065 31.7163 21.0085 31.7163 21.2124V22.9459C31.7163 25.4953 29.989 26.7189 26.8394 26.7189ZM36.1868 30.4919C36.4916 30.4919 36.6948 30.288 36.6948 29.982V15.4C36.6948 9.89346 34.1547 7.5481 27.3474 7.5481C23.6897 7.5481 21.2513 8.46585 19.4224 9.68952C19.2192 9.79149 19.2192 10.0974 19.3208 10.3014L21.0481 13.3605C21.1497 13.5645 21.4545 13.6664 21.6577 13.4625C22.6737 12.6467 24.2993 11.9329 26.7378 11.9329C30.497 11.9329 31.7163 13.0546 31.7163 15.6039V16.6236C31.7163 16.8276 31.6147 16.9296 31.4115 16.9296H26.941C21.4545 16.9296 18 19.173 18 24.0676C18 28.7584 21.4545 30.8998 25.5185 30.8998C28.6682 30.8998 30.8018 29.8801 31.8179 28.2485V29.8801C31.8179 30.186 32.0211 30.3899 32.3259 30.3899H36.1868V30.4919Z"
        fill="#8E91AE"
      />
      <Path
        d="M19.7272 4.58876H36.2884C36.5932 4.58876 36.7964 4.38482 36.7964 4.0789V0.509863C36.7964 0.203945 36.5932 0 36.2884 0H19.7272C19.4224 0 19.2192 0.203945 19.2192 0.509863V4.18087C19.2192 4.38482 19.4224 4.58876 19.7272 4.58876Z"
        fill="#8E91AE"
      />
    </Svg>
  );
};

const FilterIcon = (props: SvgProps) => {
  return (
    <View
      style={{
        width: 50,
        height: 50,
        borderRadius: 10,
        backgroundColor: '#4C46B8',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
        <Path
          d="M3 5H10M10 5C10 6.10457 10.8954 7 12 7C13.1046 7 14 6.10457 14 5M10 5C10 3.89543 10.8954 3 12 3C13.1046 3 14 3.89543 14 5M3 12H12M19 12H21M19 12C19 13.1046 18.1046 14 17 14C15.8954 14 15 13.1046 15 12C15 10.8954 15.8954 10 17 10C18.1046 10 19 10.8954 19 12ZM14 5H21M12 19H21M3 19H5M5 19C5 20.1046 5.89543 21 7 21C8.10457 21 9 20.1046 9 19C9 17.8954 8.10457 17 7 17C5.89543 17 5 17.8954 5 19Z"
          stroke="#FAFAFA"
          stroke-width="2"
          stroke-linecap="round"
        />
      </Svg>
    </View>
  );
};

const MagnifyingGlassIcon = (props: SvgProps) => {
  return (
    <Svg width="16" height="16" viewBox="0 0 16 16" fill="none" {...props}>
      <Path
        d="M12.55 12.55L15 15M14.3 7.65C14.3 3.97731 11.3227 1 7.65 1C3.97731 1 1 3.97731 1 7.65C1 11.3227 3.97731 14.3 7.65 14.3C11.3227 14.3 14.3 11.3227 14.3 7.65Z"
        stroke="#1A172C"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

const StarIcon = (props: SvgProps) => {
  return (
    <Svg width="14" height="13" viewBox="0 0 14 13" fill="none" {...props}>
      <Path
        d="M7 0L8.5716 4.83688H13.6574L9.5429 7.82624L11.1145 12.6631L7 9.67376L2.8855 12.6631L4.4571 7.82624L0.342604 4.83688H5.4284L7 0Z"
        fill="#FBC02D"
      />
    </Svg>
  );
};

const FavoriteIcon = ({
  isButtonChecked,
  props,
}: {
  isButtonChecked: boolean;
  props?: SvgProps;
}) => {
  return (
    <View
      style={{
        width: 36,
        height: 36,
        borderRadius: 100,
        backgroundColor: ThemeColors.white,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: ThemeColors.gray,
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
      }}
      {...props}>
      <Svg
        width="18"
        height="16"
        viewBox="0 0 18 16"
        fill={isButtonChecked ? '#F76834' : 'none'}
        {...props}>
        <Path
          d="M9.465 14.6075C9.21 14.6975 8.79 14.6975 8.535 14.6075C6.36 13.865 1.5 10.7675 1.5 5.51745C1.5 3.19995 3.3675 1.32495 5.67 1.32495C7.035 1.32495 8.2425 1.98495 9 3.00495C9.7575 1.98495 10.9725 1.32495 12.33 1.32495C14.6325 1.32495 16.5 3.19995 16.5 5.51745C16.5 10.7675 11.64 13.865 9.465 14.6075Z"
          stroke={isButtonChecked ? '#F76834' : '#616161'}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </Svg>
    </View>
  );
};

const ProfileCircleIcon = ({ props }: { props?: SvgProps }) => {
  return (
    <Svg width="23" height="22" viewBox="0 0 23 22" fill="none" {...props}>
      <Path
        d="M22.25 11C22.25 5.072 17.428 0.25 11.5 0.25C5.572 0.25 0.75 5.072 0.75 11C0.75 14.47 2.40899 17.552 4.96899 19.519C4.97299 19.523 4.97903 19.5251 4.98303 19.5291C6.79403 20.9161 9.04898 21.75 11.501 21.75C13.953 21.75 16.208 20.9161 18.019 19.5291C18.023 19.5251 18.029 19.523 18.033 19.519C20.591 17.552 22.25 14.47 22.25 11ZM2.25 11C2.25 5.899 6.399 1.75 11.5 1.75C16.601 1.75 20.75 5.899 20.75 11C20.75 13.523 19.732 15.8121 18.088 17.4821C17.639 15.5811 16.202 13.8199 13.21 13.8199H9.79004C6.79804 13.8199 5.35999 15.5811 4.91199 17.4821C3.26799 15.8121 2.25 13.523 2.25 11ZM6.25903 18.614C6.31703 17.588 6.78604 15.3199 9.79004 15.3199H13.21C16.214 15.3199 16.683 17.588 16.741 18.614C15.25 19.644 13.445 20.25 11.5 20.25C9.555 20.25 7.75003 19.643 6.25903 18.614ZM11.5081 12.75C13.5751 12.75 15.2581 11.068 15.2581 9C15.2581 6.932 13.5751 5.25 11.5081 5.25C9.44106 5.25 7.75806 6.932 7.75806 9C7.75806 11.068 9.44006 12.75 11.5081 12.75ZM11.5081 6.75C12.7481 6.75 13.7581 7.759 13.7581 9C13.7581 10.241 12.7481 11.25 11.5081 11.25C10.2681 11.25 9.25806 10.241 9.25806 9C9.25806 7.759 10.2681 6.75 11.5081 6.75Z"
        fill="#2A2A2A"
      />
    </Svg>
  );
};

const CreditCardIcon = ({ props }: { props?: SvgProps }) => {
  return (
    <Svg width="21" height="16" viewBox="0 0 21 16" fill="none" {...props}>
      <Path
        d="M16.5 0.25H4.5C2.082 0.25 0.75 1.582 0.75 4V12C0.75 14.418 2.082 15.75 4.5 15.75H16.5C18.918 15.75 20.25 14.418 20.25 12V4C20.25 1.582 18.918 0.25 16.5 0.25ZM18.75 12C18.75 13.577 18.077 14.25 16.5 14.25H4.5C2.923 14.25 2.25 13.577 2.25 12V6.75H18.75V12ZM18.75 5.25H2.25V4C2.25 2.423 2.923 1.75 4.5 1.75H16.5C18.077 1.75 18.75 2.423 18.75 4V5.25ZM4.75 11C4.75 10.586 5.086 10.25 5.5 10.25H8.5C8.914 10.25 9.25 10.586 9.25 11C9.25 11.414 8.914 11.75 8.5 11.75H5.5C5.086 11.75 4.75 11.414 4.75 11Z"
        fill="#2A2A2A"
      />
    </Svg>
  );
};
const MapMarkerIcon = ({ props }: { props?: SvgProps }) => {
  return (
    <Svg width="17" height="20" viewBox="0 0 17 20" fill="none" {...props}>
      <Path
        d="M8.5 4.25C6.432 4.25 4.75 5.932 4.75 8C4.75 10.068 6.432 11.75 8.5 11.75C10.568 11.75 12.25 10.068 12.25 8C12.25 5.932 10.568 4.25 8.5 4.25ZM8.5 10.25C7.259 10.25 6.25 9.241 6.25 8C6.25 6.759 7.259 5.75 8.5 5.75C9.741 5.75 10.75 6.759 10.75 8C10.75 9.241 9.741 10.25 8.5 10.25ZM8.496 0.25C4.08 0.25 0.75 3.582 0.75 8C0.75 14.208 5.486 18.076 7.521 19.45C7.817 19.65 8.156 19.75 8.496 19.75C8.834 19.75 9.17299 19.65 9.46899 19.451C11.508 18.074 16.25 14.201 16.25 7.99902C16.25 3.58102 12.917 0.25 8.496 0.25ZM8.63 18.208C8.547 18.264 8.44399 18.264 8.36099 18.208C6.92699 17.24 2.25 13.643 2.25 8C2.25 4.437 4.935 1.75 8.496 1.75C12.061 1.75 14.75 4.437 14.75 8C14.75 13.483 10.47 16.966 8.63 18.208Z"
        fill="#2A2A2A"
      />
    </Svg>
  );
};
const BellRegularIcon = ({ props }: { props?: SvgProps }) => {
  return (
    <Svg width="19" height="20" viewBox="0 0 19 20" fill="none" {...props}>
      <Path
        d="M17.9545 13.6465L16.8486 11.8005C16.4526 11.1405 16.2445 10.3855 16.2445 9.61646V6.9895C16.2445 3.2735 13.2186 0.249512 9.49955 0.249512C5.78055 0.249512 2.75454 3.2725 2.75454 6.9895V9.61646C2.75454 10.3855 2.54554 11.1405 2.15054 11.8005L1.04455 13.6465C0.659551 14.2875 0.65055 15.0595 1.01855 15.7095C1.38755 16.3615 2.05454 16.7505 2.80354 16.7505H6.78355C6.77555 16.8345 6.75055 16.9155 6.75055 17.0005C6.75055 18.5175 7.98355 19.7505 9.50055 19.7505C11.0175 19.7505 12.2505 18.5175 12.2505 17.0005C12.2505 16.9155 12.2255 16.8345 12.2175 16.7505H16.1976C16.9466 16.7505 17.6145 16.3615 17.9825 15.7104C18.3495 15.0594 18.3395 14.2875 17.9545 13.6465ZM10.7485 17.0005C10.7485 17.6895 10.1875 18.2505 9.49855 18.2505C8.80955 18.2505 8.24855 17.6895 8.24855 17.0005C8.24855 16.9155 8.26455 16.8325 8.28155 16.7505H10.7155C10.7325 16.8325 10.7485 16.9155 10.7485 17.0005ZM16.6755 14.9705C16.6275 15.0545 16.4866 15.2495 16.1956 15.2495H2.80154C2.51154 15.2495 2.36954 15.0545 2.32154 14.9705C2.27454 14.8865 2.17955 14.6655 2.32855 14.4175L3.43455 12.5715C3.97055 11.6785 4.25254 10.6565 4.25254 9.61646V6.9895C4.25254 4.1005 6.60554 1.74951 9.49754 1.74951C12.3895 1.74951 14.7425 4.1005 14.7425 6.9895V9.61646C14.7425 10.6565 15.0255 11.6785 15.5605 12.5715L16.6665 14.4175C16.8165 14.6655 16.7225 14.8865 16.6755 14.9705Z"
        fill="#2A2A2A"
      />
    </Svg>
  );
};
const ExclamationCircleIcon = ({ props }: { props?: SvgProps }) => {
  return (
    <Svg width="23" height="22" viewBox="0 0 23 22" fill="none" {...props}>
      <Path
        d="M11.5 21.75C5.572 21.75 0.75 16.928 0.75 11C0.75 5.072 5.572 0.25 11.5 0.25C17.428 0.25 22.25 5.072 22.25 11C22.25 16.928 17.428 21.75 11.5 21.75ZM11.5 1.75C6.399 1.75 2.25 5.899 2.25 11C2.25 16.101 6.399 20.25 11.5 20.25C16.601 20.25 20.75 16.101 20.75 11C20.75 5.899 16.601 1.75 11.5 1.75ZM12.52 14.5C12.52 13.948 12.073 13.5 11.52 13.5H11.51C10.958 13.5 10.5149 13.948 10.5149 14.5C10.5149 15.052 10.968 15.5 11.52 15.5C12.072 15.5 12.52 15.052 12.52 14.5ZM12.25 11.071V6.5C12.25 6.086 11.914 5.75 11.5 5.75C11.086 5.75 10.75 6.086 10.75 6.5V11.071C10.75 11.485 11.086 11.821 11.5 11.821C11.914 11.821 12.25 11.485 12.25 11.071Z"
        fill="#2A2A2A"
      />
    </Svg>
  );
};

export {
  EnvelopeIcon,
  RightArrowIcon,
  LockIcon,
  EyeSlashIcon,
  AppleIcon,
  FacebookIcon,
  GoogleIcon,
  SuccessIcon,
  EyeIcon,
  BackArrowIcon,
  UserIcon,
  BadgeCheckIcon,
  TabChatIcon,
  TabFavoritesIcon,
  TabTrendingIcon,
  TabHomeIcon,
  TabProfileIcon,
  BurgerIcon,
  BellIcon,
  CartIcon,
  NoImage,
  FilterIcon,
  MagnifyingGlassIcon,
  StarIcon,
  FavoriteIcon,
  ProfileCircleIcon,
  CreditCardIcon,
  ExclamationCircleIcon,
  BellRegularIcon,
  MapMarkerIcon,
};
