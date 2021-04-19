/* tslint:disable */
/* eslint-disable */
/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.0.40
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { CommonResponseError } from '../model';
// @ts-ignore
import { EzsignfolderCreateObjectV1Request } from '../model';
// @ts-ignore
import { EzsignfolderCreateObjectV1Response } from '../model';
// @ts-ignore
import { EzsignfolderDeleteObjectV1Response } from '../model';
// @ts-ignore
import { EzsignfolderGetObjectV1Response } from '../model';
// @ts-ignore
import { EzsignfolderSendV1Request } from '../model';
// @ts-ignore
import { EzsignfolderSendV1Response } from '../model';
// @ts-ignore
import { RequestSignature, IHeadersData } from '../api/request-signature';
/**
 * ObjectEzsignfolderApi - axios parameter creator
 * @export
 */
export const ObjectEzsignfolderApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * The endpoint allows to create one or many elements at once.  The array can contain simple (Just the object) or compound (The object and its child) objects.  Creating compound elements allows to reduce the multiple requests to create all child objects.
         * @summary Create a new Ezsignfolder
         * @param {Array<EzsignfolderCreateObjectV1Request>} ezsignfolderCreateObjectV1Request 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        ezsignfolderCreateObjectV1: async (ezsignfolderCreateObjectV1Request: Array<EzsignfolderCreateObjectV1Request>, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'ezsignfolderCreateObjectV1Request' is not null or undefined
            assertParamExists('ezsignfolderCreateObjectV1', 'ezsignfolderCreateObjectV1Request', ezsignfolderCreateObjectV1Request)
            const localVarPath = `/1/object/ezsignfolder`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            let basePath = DUMMY_BASE_URL
            if (configuration && configuration.basePath) basePath = configuration.basePath
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
	    
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Authorization required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(ezsignfolderCreateObjectV1Request, localVarRequestOptions, configuration)

            // Signature
            if (configuration && configuration.apiKey) {
                const secret = configuration.getSecret()
                if (secret) {
                    const headers:IHeadersData = {
                        authorization: configuration.apiKey as string,
                        secret: secret as string,
                        method: 'POST' as string,
                        url: basePath + localVarPath as string,
                        body: localVarRequestOptions.data as string
                    }
                    const signatureHeaders = RequestSignature.getHeaders(headers)
                    localVarRequestOptions.headers = { ...localVarRequestOptions.headers, ...signatureHeaders }
                } 
            }

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Delete an existing Ezsignfolder
         * @param {number} pkiEzsignfolderID The unique ID of the Ezsignfolder
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        ezsignfolderDeleteObjectV1: async (pkiEzsignfolderID: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'pkiEzsignfolderID' is not null or undefined
            assertParamExists('ezsignfolderDeleteObjectV1', 'pkiEzsignfolderID', pkiEzsignfolderID)
            const localVarPath = `/1/object/ezsignfolder/{pkiEzsignfolderID}`
                .replace(`{${"pkiEzsignfolderID"}}`, encodeURIComponent(String(pkiEzsignfolderID)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            let basePath = DUMMY_BASE_URL
            if (configuration && configuration.basePath) basePath = configuration.basePath
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
	    
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Authorization required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            // Signature
            if (configuration && configuration.apiKey) {
                const secret = configuration.getSecret()
                if (secret) {
                    const headers:IHeadersData = {
                        authorization: configuration.apiKey as string,
                        secret: secret as string,
                        method: 'DELETE' as string,
                        url: basePath + localVarPath as string,
                        body: localVarRequestOptions.data as string
                    }
                    const signatureHeaders = RequestSignature.getHeaders(headers)
                    localVarRequestOptions.headers = { ...localVarRequestOptions.headers, ...signatureHeaders }
                } 
            }

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Retrieve an existing Ezsignfolder\'s children IDs
         * @param {number} pkiEzsignfolderID The unique ID of the Ezsignfolder
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        ezsignfolderGetChildrenV1: async (pkiEzsignfolderID: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'pkiEzsignfolderID' is not null or undefined
            assertParamExists('ezsignfolderGetChildrenV1', 'pkiEzsignfolderID', pkiEzsignfolderID)
            const localVarPath = `/1/object/ezsignfolder/{pkiEzsignfolderID}/getChildren`
                .replace(`{${"pkiEzsignfolderID"}}`, encodeURIComponent(String(pkiEzsignfolderID)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            let basePath = DUMMY_BASE_URL
            if (configuration && configuration.basePath) basePath = configuration.basePath
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
	    
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Authorization required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            // Signature
            if (configuration && configuration.apiKey) {
                const secret = configuration.getSecret()
                if (secret) {
                    const headers:IHeadersData = {
                        authorization: configuration.apiKey as string,
                        secret: secret as string,
                        method: 'GET' as string,
                        url: basePath + localVarPath as string,
                        body: localVarRequestOptions.data as string
                    }
                    const signatureHeaders = RequestSignature.getHeaders(headers)
                    localVarRequestOptions.headers = { ...localVarRequestOptions.headers, ...signatureHeaders }
                } 
            }

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Retrieve an existing Ezsignfolder
         * @param {number} pkiEzsignfolderID The unique ID of the Ezsignfolder
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        ezsignfolderGetObjectV1: async (pkiEzsignfolderID: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'pkiEzsignfolderID' is not null or undefined
            assertParamExists('ezsignfolderGetObjectV1', 'pkiEzsignfolderID', pkiEzsignfolderID)
            const localVarPath = `/1/object/ezsignfolder/{pkiEzsignfolderID}`
                .replace(`{${"pkiEzsignfolderID"}}`, encodeURIComponent(String(pkiEzsignfolderID)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            let basePath = DUMMY_BASE_URL
            if (configuration && configuration.basePath) basePath = configuration.basePath
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
	    
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Authorization required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            // Signature
            if (configuration && configuration.apiKey) {
                const secret = configuration.getSecret()
                if (secret) {
                    const headers:IHeadersData = {
                        authorization: configuration.apiKey as string,
                        secret: secret as string,
                        method: 'GET' as string,
                        url: basePath + localVarPath as string,
                        body: localVarRequestOptions.data as string
                    }
                    const signatureHeaders = RequestSignature.getHeaders(headers)
                    localVarRequestOptions.headers = { ...localVarRequestOptions.headers, ...signatureHeaders }
                } 
            }

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Send the Ezsignfolder to the signatories for signature
         * @param {number} pkiEzsignfolderID The unique ID of the Ezsignfolder
         * @param {EzsignfolderSendV1Request} ezsignfolderSendV1Request 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        ezsignfolderSendV1: async (pkiEzsignfolderID: number, ezsignfolderSendV1Request: EzsignfolderSendV1Request, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'pkiEzsignfolderID' is not null or undefined
            assertParamExists('ezsignfolderSendV1', 'pkiEzsignfolderID', pkiEzsignfolderID)
            // verify required parameter 'ezsignfolderSendV1Request' is not null or undefined
            assertParamExists('ezsignfolderSendV1', 'ezsignfolderSendV1Request', ezsignfolderSendV1Request)
            const localVarPath = `/1/object/ezsignfolder/{pkiEzsignfolderID}/send`
                .replace(`{${"pkiEzsignfolderID"}}`, encodeURIComponent(String(pkiEzsignfolderID)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            let basePath = DUMMY_BASE_URL
            if (configuration && configuration.basePath) basePath = configuration.basePath
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
	    
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Authorization required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(ezsignfolderSendV1Request, localVarRequestOptions, configuration)

            // Signature
            if (configuration && configuration.apiKey) {
                const secret = configuration.getSecret()
                if (secret) {
                    const headers:IHeadersData = {
                        authorization: configuration.apiKey as string,
                        secret: secret as string,
                        method: 'POST' as string,
                        url: basePath + localVarPath as string,
                        body: localVarRequestOptions.data as string
                    }
                    const signatureHeaders = RequestSignature.getHeaders(headers)
                    localVarRequestOptions.headers = { ...localVarRequestOptions.headers, ...signatureHeaders }
                } 
            }

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ObjectEzsignfolderApi - functional programming interface
 * @export
 */
export const ObjectEzsignfolderApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ObjectEzsignfolderApiAxiosParamCreator(configuration)
    return {
        /**
         * The endpoint allows to create one or many elements at once.  The array can contain simple (Just the object) or compound (The object and its child) objects.  Creating compound elements allows to reduce the multiple requests to create all child objects.
         * @summary Create a new Ezsignfolder
         * @param {Array<EzsignfolderCreateObjectV1Request>} ezsignfolderCreateObjectV1Request 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async ezsignfolderCreateObjectV1(ezsignfolderCreateObjectV1Request: Array<EzsignfolderCreateObjectV1Request>, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<EzsignfolderCreateObjectV1Response>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.ezsignfolderCreateObjectV1(ezsignfolderCreateObjectV1Request, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Delete an existing Ezsignfolder
         * @param {number} pkiEzsignfolderID The unique ID of the Ezsignfolder
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async ezsignfolderDeleteObjectV1(pkiEzsignfolderID: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<EzsignfolderDeleteObjectV1Response>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.ezsignfolderDeleteObjectV1(pkiEzsignfolderID, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Retrieve an existing Ezsignfolder\'s children IDs
         * @param {number} pkiEzsignfolderID The unique ID of the Ezsignfolder
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async ezsignfolderGetChildrenV1(pkiEzsignfolderID: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.ezsignfolderGetChildrenV1(pkiEzsignfolderID, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Retrieve an existing Ezsignfolder
         * @param {number} pkiEzsignfolderID The unique ID of the Ezsignfolder
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async ezsignfolderGetObjectV1(pkiEzsignfolderID: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<EzsignfolderGetObjectV1Response>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.ezsignfolderGetObjectV1(pkiEzsignfolderID, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Send the Ezsignfolder to the signatories for signature
         * @param {number} pkiEzsignfolderID The unique ID of the Ezsignfolder
         * @param {EzsignfolderSendV1Request} ezsignfolderSendV1Request 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async ezsignfolderSendV1(pkiEzsignfolderID: number, ezsignfolderSendV1Request: EzsignfolderSendV1Request, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<EzsignfolderSendV1Response>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.ezsignfolderSendV1(pkiEzsignfolderID, ezsignfolderSendV1Request, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * ObjectEzsignfolderApi - factory interface
 * @export
 */
export const ObjectEzsignfolderApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ObjectEzsignfolderApiFp(configuration)
    return {
        /**
         * The endpoint allows to create one or many elements at once.  The array can contain simple (Just the object) or compound (The object and its child) objects.  Creating compound elements allows to reduce the multiple requests to create all child objects.
         * @summary Create a new Ezsignfolder
         * @param {Array<EzsignfolderCreateObjectV1Request>} ezsignfolderCreateObjectV1Request 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        ezsignfolderCreateObjectV1(ezsignfolderCreateObjectV1Request: Array<EzsignfolderCreateObjectV1Request>, options?: any): AxiosPromise<EzsignfolderCreateObjectV1Response> {
            return localVarFp.ezsignfolderCreateObjectV1(ezsignfolderCreateObjectV1Request, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Delete an existing Ezsignfolder
         * @param {number} pkiEzsignfolderID The unique ID of the Ezsignfolder
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        ezsignfolderDeleteObjectV1(pkiEzsignfolderID: number, options?: any): AxiosPromise<EzsignfolderDeleteObjectV1Response> {
            return localVarFp.ezsignfolderDeleteObjectV1(pkiEzsignfolderID, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Retrieve an existing Ezsignfolder\'s children IDs
         * @param {number} pkiEzsignfolderID The unique ID of the Ezsignfolder
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        ezsignfolderGetChildrenV1(pkiEzsignfolderID: number, options?: any): AxiosPromise<void> {
            return localVarFp.ezsignfolderGetChildrenV1(pkiEzsignfolderID, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Retrieve an existing Ezsignfolder
         * @param {number} pkiEzsignfolderID The unique ID of the Ezsignfolder
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        ezsignfolderGetObjectV1(pkiEzsignfolderID: number, options?: any): AxiosPromise<EzsignfolderGetObjectV1Response> {
            return localVarFp.ezsignfolderGetObjectV1(pkiEzsignfolderID, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Send the Ezsignfolder to the signatories for signature
         * @param {number} pkiEzsignfolderID The unique ID of the Ezsignfolder
         * @param {EzsignfolderSendV1Request} ezsignfolderSendV1Request 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        ezsignfolderSendV1(pkiEzsignfolderID: number, ezsignfolderSendV1Request: EzsignfolderSendV1Request, options?: any): AxiosPromise<EzsignfolderSendV1Response> {
            return localVarFp.ezsignfolderSendV1(pkiEzsignfolderID, ezsignfolderSendV1Request, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * ObjectEzsignfolderApi - object-oriented interface
 * @export
 * @class ObjectEzsignfolderApi
 * @extends {BaseAPI}
 */
export class ObjectEzsignfolderApi extends BaseAPI {
    /**
     * The endpoint allows to create one or many elements at once.  The array can contain simple (Just the object) or compound (The object and its child) objects.  Creating compound elements allows to reduce the multiple requests to create all child objects.
     * @summary Create a new Ezsignfolder
     * @param {Array<EzsignfolderCreateObjectV1Request>} ezsignfolderCreateObjectV1Request 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ObjectEzsignfolderApi
     */
    public ezsignfolderCreateObjectV1(ezsignfolderCreateObjectV1Request: Array<EzsignfolderCreateObjectV1Request>, options?: any) {
        return ObjectEzsignfolderApiFp(this.configuration).ezsignfolderCreateObjectV1(ezsignfolderCreateObjectV1Request, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Delete an existing Ezsignfolder
     * @param {number} pkiEzsignfolderID The unique ID of the Ezsignfolder
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ObjectEzsignfolderApi
     */
    public ezsignfolderDeleteObjectV1(pkiEzsignfolderID: number, options?: any) {
        return ObjectEzsignfolderApiFp(this.configuration).ezsignfolderDeleteObjectV1(pkiEzsignfolderID, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Retrieve an existing Ezsignfolder\'s children IDs
     * @param {number} pkiEzsignfolderID The unique ID of the Ezsignfolder
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ObjectEzsignfolderApi
     */
    public ezsignfolderGetChildrenV1(pkiEzsignfolderID: number, options?: any) {
        return ObjectEzsignfolderApiFp(this.configuration).ezsignfolderGetChildrenV1(pkiEzsignfolderID, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Retrieve an existing Ezsignfolder
     * @param {number} pkiEzsignfolderID The unique ID of the Ezsignfolder
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ObjectEzsignfolderApi
     */
    public ezsignfolderGetObjectV1(pkiEzsignfolderID: number, options?: any) {
        return ObjectEzsignfolderApiFp(this.configuration).ezsignfolderGetObjectV1(pkiEzsignfolderID, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Send the Ezsignfolder to the signatories for signature
     * @param {number} pkiEzsignfolderID The unique ID of the Ezsignfolder
     * @param {EzsignfolderSendV1Request} ezsignfolderSendV1Request 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ObjectEzsignfolderApi
     */
    public ezsignfolderSendV1(pkiEzsignfolderID: number, ezsignfolderSendV1Request: EzsignfolderSendV1Request, options?: any) {
        return ObjectEzsignfolderApiFp(this.configuration).ezsignfolderSendV1(pkiEzsignfolderID, ezsignfolderSendV1Request, options).then((request) => request(this.axios, this.basePath));
    }
}
