<script lang="ts">
    // import {type Device, DeviceTypes, type LynxModule, type MotorLynxModule} from "./index";
    // import DeviceGroup from "./DeviceGroup.svelte";

    interface Props {
        name: string;
        checked?: boolean;
        // module: MotorLynxModule;
    }

    // let {name, checked = false, module = $bindable()}: Props = $props();
    let {name, checked = false}: Props = $props();
</script>

<input type="radio" name="hub" class="tab" aria-label={name} {checked}/>
<div class="tab-content bg-base-100 border-base-300 p-6">
    <p><b>My limelight doesn't work!</b></p> <!-- This comes from the old pedro docs having a different ip than what is current - https://github.com/Pedro-Pathing/Documentation-Old/blob/main/src/general/xml.md -->
    <p>Perhaps the default IP the generator gives is incorrect. Plug in your limelight, go to the 'configure robot' 
        tab on the driver station, and press scan. Your limelight will show up as a 'Ethernet Device', and below it 
        will be an IP address. Back in the config generator, type in your limelight name, and then a 'at' symbol (@)
        and the IP address. This will replace the default IP address with the one you scanned.</p>
    <br>
    <p><b>Finding webcam serial numbers / How to use Generic Webcam</b></p> <!-- Hopefully this is right -->
    <p>Connect your webcam to the control hub, and go to 'configure robot' on the driver station, and press scan. Your 
        webcam(s) will show up, and below each will be a string of letters and numbers. Back in the config generator, 
        type in the webcam name, an 'at' symbol (@) and then the serial number.</p>
    <p>You can also find the serial number on <u><a href = "https://ftc-community.firstinspires.org/t/logitech-c270-serial-numbers-not-unique/928">windows through device manager</a></u></p>
</div>