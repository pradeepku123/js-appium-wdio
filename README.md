# Pre-requsite
- Node V16.16 LTS
- Android Studio 
- Emulator Up & Runing
- Appium Services & Appium Doctor
# How to Start Appium echoSystem for Testing
    - Start Emulator using Android Studio
    - pradeep@pradeep:~$ cd /usr/local/android-studio/bin/      
    - pradeep@pradeep:/usr/local/android-studio/bin$ sh studio.sh
# Start Emulator using Android Virtual Device

# Start Appium inspector
pradeep@pradeep:~/workstation/Appium/Support/tools$ ./Appium-Inspector-linux-2023.2.1.AppImage 
libva error: vaGetDriverNameByIndex() failed with unknown libva error, driver_name = (null)
Opening in existing browser session.
Add Capabilities
{
  "platformName": "Android",
  "appium:deviceName": "Pixel 2",
  "appium:automationName": "UIAutomator2",
  "appium:app": "/home/pradeep/workstation/Appium/js-appium-wdio/app/android/ApiDemos-debug.apk",
  "appium:ensureWebviewsHavePages": true,
  "appium:nativeWebScreenshot": true,
  "appium:newCommandTimeout": 3600,
  "appium:connectHardwareKeyboard": true
}

# Start Appium Server
/workstation/Appium/Support/tools$ appium -p 4724 --allow-cors
[Appium] Welcome to Appium v2.0.0-beta.63 (REV 3fea5493a431ac64470d4230d4b51438cf213bd1)
[Appium] Non-default server args:
[Appium] {
[Appium]   allowCors: true,
[Appium]   port: 3724
[Appium] }
[Appium] Attempting to load driver uiautomator2...
[debug] [Appium] Requiring driver at /home/pradeep/.appium/node_modules/appium-uiautomator2-driver
[Appium] You have enabled CORS requests from any host. Be careful not to visit sites which could maliciously try to start Appium sessions on your machine
[Appium] Appium REST http interface listener started on 0.0.0.0:3724
[Appium] Available drivers:
[Appium]   - uiautomator2@2.14.0 (automationName 'UiAutomator2')
[Appium] No plugins have been installed. Use the "appium plugin" command to install the one(s) you want to use.




