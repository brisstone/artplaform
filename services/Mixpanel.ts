import mixpanel from "mixpanel-browser";

export class MixpanelTracking {
    private static _instance: MixpanelTracking;    

    public static getInstance(): MixpanelTracking{
        if (!MixpanelTracking._instance)
            return (MixpanelTracking._instance = new MixpanelTracking())

        return this._instance;
    }

    public constructor(){
        if(MixpanelTracking._instance) {
            throw new Error("Error: Instance Creation of MixPanel is not allowed. Use Mixpaneltracking.getInstance() instead")
        }
        mixpanel.init(process.env.MIXPANEL_TOKEN || "", {
            debug: false
        })
    }

    public track(name: string, data: object ={}){
        mixpanel.track(name, data)
    }

    public navPressed (name: string, data?: any){
        this.track(`${name}`, data)
    }
}