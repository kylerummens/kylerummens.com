import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {

  constructor(
    @Inject(PLATFORM_ID)
    private readonly platform_id: any,
    private router: Router) {

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd && isPlatformBrowser(this.platform_id)) {
        this.logNavigation();
      }
    })

  }

  private generateAnalyticsData() {
    const nav = navigator as any;

    return {
      connection_downlink: nav.connection?.downlink,
      connection_effective_type: nav.connection?.effectiveType,
      connection_rtt: nav.connection?.rtt,
      cookie_enabled: navigator.cookieEnabled,
      device_memory: nav.deviceMemory,
      hardware_concurrency: navigator.hardwareConcurrency,
      user_agent: navigator.userAgent,
      platform: nav.userAgentData?.platform,
      mobile: nav.userAgentData?.mobile,
      webdriver: navigator.webdriver,
      referrer: document.referrer,
      pathname: window.location.pathname,
      screen: window.screen
    }
  }

  private logNavigation() {
    const body = this.generateAnalyticsData();
    navigator.sendBeacon('/api/analytics/event', JSON.stringify(body));
  }
}
