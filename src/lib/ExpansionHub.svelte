<script lang="ts">
    import {type Device, DeviceTypes, type LynxModule, type ExpansionLynxModule} from "./index";
    import DeviceGroup from "./DeviceGroup.svelte";

    interface Props {
        name: string;
        checked?: boolean;
        module: ExpansionLynxModule;
    }

    let {name, checked = false, module = $bindable()}: Props = $props();
</script>

<input type="radio" name="hub" class="tab" aria-label={name} {checked}/>
<div class="tab-content bg-base-100 border-base-300 p-6">
    <DeviceGroup type="Motors" bind:devices={module.motors} deviceTypes={DeviceTypes.MOTORS}/>
    <DeviceGroup type="Servos" bind:devices={module.servos} deviceTypes={DeviceTypes.SERVOS}/>
    <DeviceGroup type="I<sup>2</sup>C Devices" bind:devices={module.i2c} deviceTypes={DeviceTypes.I2C}/>
    <DeviceGroup type="Digital Devices" bind:devices={module.digital} deviceTypes={DeviceTypes.DIGITAL}/>
    <DeviceGroup type="Analog Devices" bind:devices={module.analog} deviceTypes={DeviceTypes.ANALOG}/>
    <!-- Diffrence between ExpansionHub and MotorHub is that ExpansionHub doesn't have ethernet devices cause there are no useable usb ports -->
     <!-- This also means that I changed the thing in App.svelte to use the new ExpansionHub layout -->
</div>
