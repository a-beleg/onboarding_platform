import React from 'react';

type ImageProps = {
    width: number;
    height: number;
};

const LogoDark = ({width, height}: ImageProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 1613 225" fill="none">
            <path
                d="M6.6 88.6L97.8 44.4V66.8L28 100.8L97.8 135V157.2L6.6 112.8V88.6ZM201.697 176H113.697V36H194.297C223.497 36 242.097 51.2 242.097 75.4C242.097 85 237.897 94.8 229.897 100.8C241.697 107 249.097 120.8 249.097 135.6C249.097 159.8 230.097 176 201.697 176ZM146.097 115V149.2H190.697C204.897 149.2 212.697 143 212.697 131.8C212.697 122.8 205.097 115 195.097 115H146.097ZM146.097 92H193.897C201.497 92 207.097 86.4 207.097 78.6C207.097 68.4 199.897 62.6 186.097 62.6H146.097V92ZM268.561 36H400.561V62.8L301.561 63V93.2H387.561V116.2H301.561V149.2H400.561V176H268.561V36ZM465.433 149.2H553.633V176H432.233V36H465.433V149.2ZM637.981 175.6C594.981 175.6 559.981 144.2 559.981 105.6C559.981 67 594.981 35.6 637.981 35.6C680.981 35.6 715.981 67 715.981 105.6C715.981 144.2 680.981 175.6 637.981 175.6ZM594.181 105.6C594.181 127.6 614.581 143.8 637.981 143.8C661.181 143.8 681.581 127.4 681.581 105.4C681.581 83 661.581 66.8 637.981 66.8C614.181 66.8 594.181 83 594.181 105.6ZM736.334 36H769.534V106.4C769.534 128.4 779.134 144.8 802.334 144.8C826.334 144.8 835.334 127.8 835.334 106.4V36H868.334V106.4C868.334 145 845.334 176.4 802.334 176.4C759.334 176.4 736.334 145 736.334 106.4V36ZM895.077 81.2C895.077 49.2 938.277 36 970.077 36C1005.08 36 1041.08 50.2 1041.08 81.6H1003.88C1002.88 67 986.677 60.6 970.277 60.6C954.077 60.6 934.277 66.8 934.277 80C934.277 91.8 950.877 93.6 961.077 93.6H995.277C1018.08 93.6 1044.88 103.8 1044.88 130.8C1044.88 165.4 1000.48 175.8 970.877 175.8C941.677 175.8 895.077 166.2 895.077 130.2H934.277C934.677 144.4 954.077 151 969.477 151C985.077 151 1005.88 145.6 1005.88 131.4C1005.88 120.2 992.677 117.6 979.277 117.6H944.677C922.877 117.6 895.077 107 895.077 81.2ZM1137.59 175.6C1094.59 175.6 1059.59 144.2 1059.59 105.6C1059.59 67 1094.59 35.6 1137.59 35.6C1180.59 35.6 1215.59 67 1215.59 105.6C1215.59 144.2 1180.59 175.6 1137.59 175.6ZM1093.79 105.6C1093.79 127.6 1114.19 143.8 1137.59 143.8C1160.79 143.8 1181.19 127.4 1181.19 105.4C1181.19 83 1161.19 66.8 1137.59 66.8C1113.79 66.8 1093.79 83 1093.79 105.6ZM1208.8 36H1246.8L1289 111.6L1331.4 36H1369.4L1289 179.6L1208.8 36ZM1478.53 35.8H1501.53L1416.13 175.8H1393.13L1478.53 35.8ZM1514.61 135.4L1584.21 101.4L1514.61 67.4V45L1605.81 89.4V113.4L1514.61 158V135.4Z"
                fill="#7928E0"/>
        </svg>
    );
};

export {LogoDark};