import {DeviceTypes, type ExpansionLynxModule, type LynxModule, type MotorLynxModule} from "./index";
import {create} from "xmlbuilder2";
import type {XMLBuilder} from "xmlbuilder2/lib/interfaces";

export interface CodeBuilder {
    build(controlHub: MotorLynxModule, expansionHub: MotorLynxModule, servoHub: LynxModule): string;
}

class XmlBuilder implements CodeBuilder {
    build(controlHub: MotorLynxModule, expansionHub: MotorLynxModule, servoHub: LynxModule): string {
        const doc = create({version: '1.0', standalone: true, encoding: "UTF-8"});

        const robotBlock = doc.ele("Robot", {type: "FirstInspires-FTC"});

        for(const usb of controlHub.usb) {
            if (usb.type.type === "Limelight3a") { // limelight and webcam go in different spots, so all usb devices with limelight type are made up here
                robotBlock.ele("EthernetDevice", {name: usb.name.split("@")[0], serialNumber: `EthernetOverUsb:eth0:${usb.name.includes("@") ? usb.name.split("@")[1]: "172.29.0.28"}`, port: "-1", ipAddress: "172.29.0.1"});
            } // If no @ is present, default to 172.29.0.28. Otherwise put in user specified ip
        }

        const portalBlock = robotBlock.ele("LynxUsbDevice", {name: "Control Hub Portal", serialNumber: "(embedded)", parentModuleAddress: 173});

        const controlHubBlock = portalBlock.ele("LynxModule", {name: "Control Hub", port: 173});
        XmlBuilder.buildMotorLynxModule(controlHubBlock, controlHub);
        
        if(expansionHub.analog.length !== 0 || expansionHub.digital.length !== 0 || expansionHub.i2c.length !== 0 || expansionHub.motors.length !== 0 || expansionHub.servos.length !== 0) {
            const expansionHubBuilder = portalBlock.ele("LynxModule", {name: "Expansion Hub 0", port: 0});
            XmlBuilder.buildExpansionLynxModule(expansionHubBuilder, expansionHub);
        }
        
        if(servoHub.servos.length !== 0) {
            const servoHubBuilder = portalBlock.ele("LynxModule", {name: "Servo Hub 1", port: 1});
            XmlBuilder.buildLynxModule(servoHubBuilder, servoHub);
        }

        for(const usb of controlHub.usb) {
            if (usb.type.type === "GenericWebcam") {
                robotBlock.ele("Webcam", {name: usb.name.split("@")[0], serialNumber: usb.name.split("@")[1]});
                // Serial number is the stuff after the @
            }
        }
        
        return doc.end({prettyPrint: true});
    }

    private static buildLynxModule(doc: XMLBuilder, module: LynxModule) {
        for (const servo of module.servos) {
            doc.ele(servo.type.type, {name: servo.name, port: servo.port});
        }
    }

    private static buildMotorLynxModule(doc: XMLBuilder, module: MotorLynxModule) {
        for (const motor of module.motors) {
            doc.ele(motor.type.type, {name: motor.name, port: motor.port});
        }
        for (const servo of module.servos) {
            doc.ele(servo.type.type, {name: servo.name, port: servo.port});
        }
        for (const i2c of module.i2c) {
            doc.ele(i2c.type.type, {name: i2c.name, port: 0, bus: i2c.port});
        }
        for (const digital of module.digital) {
            doc.ele(digital.type.type, {name: digital.name, port: digital.port});
        }
        for (const analog of module.analog) {
            doc.ele(analog.type.type, {name: analog.name, port: analog.port});
        }
    }

    private static buildExpansionLynxModule(doc: XMLBuilder, module: ExpansionLynxModule) {
        for (const motor of module.motors) {
            doc.ele(motor.type.type, {name: motor.name, port: motor.port});
        }
        for (const servo of module.servos) {
            doc.ele(servo.type.type, {name: servo.name, port: servo.port});
        }
        for (const i2c of module.i2c) {
            doc.ele(i2c.type.type, {name: i2c.name, port: 0, bus: i2c.port});
        }
        for (const digital of module.digital) {
            doc.ele(digital.type.type, {name: digital.name, port: digital.port});
        }
        for (const analog of module.analog) {
            doc.ele(analog.type.type, {name: analog.name, port: analog.port});
        }
    }
}

export default new XmlBuilder();