import { Injectable, Inject } from '@angular/core';
import { DEVICE } from 'nativescript-angular/platform-providers';
import { Device, platformNames, screen } from 'tns-core-modules/platform';

import { debugLog } from '@src/app/utils/app-utils/app-utils.common';


@Injectable()
export class AppUtils {

    constructor(@Inject(DEVICE) private device: Device) { }

    debugLog = debugLog;

    platformVal = (vals: { web?: any; mobile: any; android: any; ios: any; }) => {
        return vals.mobile;
    }

    platform = (verbose: boolean = false): 'web' | 'mobile' | 'android' | 'ios' => {
        if (verbose) {
            return 'mobile';
        } else {
            if (this.device.os === platformNames.android) {
                return 'android';
            } else if (this.device.os === platformNames.ios) {
                return 'ios';
            }
        }
    }

    screenWidth = (): number => {
        return screen.mainScreen.widthDIPs;
    }
}