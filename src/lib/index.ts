export interface Device {
    name: string;
    type: DeviceType;
    port: number;
}

export interface DeviceType {
    readonly type: string;
    readonly displayName: string;
}

export interface LynxModule {
    motors: Device[];
    servos: Device[];
    i2c: Device[];
    digital: Device[];
    analog: Device[];
}

export function createEmptyLynxModule(): LynxModule {
    return {
        motors: [],
        servos: [],
        i2c: [],
        digital: [],
        analog: []
    }
}

export const DeviceTypes = {
    MOTORS: [
        {
            type: 'goBILDA5201SeriesMotor',
            displayName: 'goBILDA 5201 Series'
        },
        {
            type: 'goBILDA5202SeriesMotor',
            displayName: 'goBILDA 5202/5203/5204 Series'
        },
        {
            type: 'Matrix12vMotor',
            displayName: 'Matrix 12V'
        },
        {
            type: 'NeveRest3.7v1Gearmotor',
            displayName: 'NeveRest 3.7 Gearmotor'
        },
        {
            type: 'NeveRest20Gearmotor',
            displayName: 'NeveRest 20 Gearmotor'
        },
        {
            type: 'NeveRest40Gearmotor',
            displayName: 'NeveRest 40 Gearmotor'
        },
        {
            type: 'NeveRest60Gearmotor',
            displayName: 'NeveRest 60 Gearmotor'
        },
        {
            type: 'RevRobotics20HDHexMotor',
            displayName: 'REV 20HD Hex Motor'
        },
        {
            type: 'RevRobotics40HDHexMotor',
            displayName: 'REV 40HD Hex Motor'
        },
        {
            type: 'RevRoboticsCoreHexMotor',
            displayName: 'REV Core Hex Motor'
        },
        {
            type: 'RevRoboticsUltraplanetaryHDHexMotor',
            displayName: 'REV Ultraplanetary HD Hex Motor'
        },
        {
            type: 'TetrixMotor',
            displayName: 'Tetrix Motor'
        },
        {
            type: 'Motor',
            displayName: 'Generic Motor'
        }
    ],
    SERVOS: [
        {
            type: 'Servo',
            displayName: 'Servo'
        },
        {
            type: 'ContinuousRotationServo',
            displayName: 'CR Servo'
        },
        {
            type: 'RevBlinkinLedDriver',
            displayName: 'REV Blinkin'
        },
        {
            type: 'RevSPARKMini',
            displayName: 'REV SPARK Mini'
        }
    ],
    I2C: [
        {
            type: 'AdafruitBNO055IMU',
            displayName: 'Adafruit BNO055 IMU'
        },
        {
            type: 'HuskyLens',
            displayName: 'HuskyLens'
        },
        {
            type: 'OctoQuadFTC',
            displayName: 'OctoQuad'
        },
        {
            type: 'KauaiLabsNavxMicro',
            displayName: 'navX-Micro'
        },
        {
            type: 'MaxSonarI2CXL',
            displayName: 'MaxSonar'
        },
        {
            type: 'ModernRoboticsI2cCompassSensor',
            displayName: 'Modern Robotics Compass Sensor'
        },
        {
            type: 'ModernRoboticsI2cRangeSensor',
            displayName: 'Modern Robotics Range Sensor'
        },
        {
            type: 'REV_VL53L0X_RANGE_SENSOR',
            displayName: 'REV 2M Distance Sensor'
        },
        {
            type: 'RevExternalImu',
            displayName: 'REV 9-Axis IMU'
        },
        {
            type: 'RevColorSensorV3',
            displayName: 'REV Color Sensor v3'
        },
        {
            type: 'QWIIC_LED_STICK',
            displayName: 'SparkFun LED Stick'
        },
        {
            type: 'SparkFunOTOS',
            displayName: 'SparkFun OTOS'
        }

    ],
    DIGITAL: [
        {
            type: 'RevTouchSensor',
            displayName: 'REV Touch Sensor'
        },
        {
            type: 'LED',
            displayName: 'Led'
        },
        {
            type: 'DigitalDevice',
            displayName: 'Digital Device'
        }
    ],
    ANALOG: [
        {
            type: 'OpticalDistanceSensor',
            displayName: 'Optical Distance Sensor'
        },
        {
            type: 'ModernRoboticsAnalogTouchSensor',
            displayName: 'Modern Robotics Analog Touch Sensor'
        },
        {
            type: 'AnalogDevice',
            displayName: 'Analog Device'
        }
    ]
} as const;

