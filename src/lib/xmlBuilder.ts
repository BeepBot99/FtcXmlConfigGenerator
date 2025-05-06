import type {LynxModule} from "./index";
import {create} from "xmlbuilder2";
import type {XMLBuilder} from "xmlbuilder2/lib/interfaces";

export interface CodeBuilder {
    build(controlHub: LynxModule, expansionHub: LynxModule): string;
}

class XmlBuilder implements CodeBuilder {
    build(controlHub: LynxModule, expansionHub: LynxModule): string {
        const doc = create({version: '1.0', standalone: true, encoding: "UTF-8"})
            .ele("Robot", {type: "FirstInspires-FTC"})
            .ele("LynxUsbDevice", {name: "Control Hub Portal", serialNumber: "(embedded)", parentModuleAddress: 173})
        const controlHubBuilder = doc.ele("LynxModule", {name: "Control Hub", port: 173});
        XmlBuilder.buildLynxModule(controlHubBuilder, controlHub);
        const expansionHubBuilder = doc.ele("LynxModule", {name: "Expansion Hub 0", port: 0});
        XmlBuilder.buildLynxModule(expansionHubBuilder, expansionHub);
        return doc.end({prettyPrint: true});
    }

    private static buildLynxModule(doc: XMLBuilder, module: LynxModule) {
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