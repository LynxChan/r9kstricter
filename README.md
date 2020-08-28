# r9kstricter
Makes the R9K mode for posts stricter on LynxChan 2.4
The default R9K mode in LynxChan is flawed because beginning your post with a quoted post number (>>1234) is often enough to circumvent the R9K filter. This addon makes R9K mode ignore if a post starts with a quoted post number and only checks the actual post message for uniqueness. This makes circumventing the filter harder because you can't simply start your post with a quoted post number to circumvent it anymore.

<b>Installation instructions:</b>

1. Go to ``/LynxChan/src/be/addons/``
2. Git clone this repository
3. You now have a folder called 'r9kstricter' in your addons folder
4. Go to the Global Settings, find the 'Addons' array near the bottom and enter ``r9kstricter`` there, then Save the settings
5. Restart Lynxchan from your server terminal.
6. That's it, when you enable R9K for posts on your board it will now operate in a stricter mode.
