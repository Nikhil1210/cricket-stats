import { Scores } from '../models/scores';
import { test_data, server_url } from '../constants';

export async function GetScoresData(isTestData: boolean): Promise<Scores[]> {
    if (isTestData) {
       return new Promise<Scores[]>((resolve, reject) => {
            resolve(test_data);
        });
    } else {
        var req: RequestInit = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            mode: 'cors',
            method: 'GET'
         };
        debugger;
        const result = await fetch(server_url, req);
        const json = await result.json();
        debugger;
        return json;
    }
}
