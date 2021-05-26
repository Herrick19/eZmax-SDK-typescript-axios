/* tslint:disable */
/* eslint-disable */
/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.0.43
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
import { EzsignsignatureCreateObjectV1Request } from '../model';
// @ts-ignore
import { EzsignsignatureCreateObjectV1Response } from '../model';
// @ts-ignore
import { EzsignsignatureDeleteObjectV1Response } from '../model';
// @ts-ignore
import { EzsignsignatureGetObjectV1Response } from '../model';
// @ts-ignore
import { RequestSignature, IHeadersData } from '../api/request-signature';
/**
 * ObjectEzsignsignatureApi - axios parameter creator
 * @export
 */
export const ObjectEzsignsignatureApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * The endpoint allows to create one or many elements at once.  The array can contain simple (Just the object) or compound (The object and its child) objects.  Creating compound elements allows to reduce the multiple requests to create all child objects.
         * @summary Create a new Ezsignsignature
         * @param {Array<EzsignsignatureCreateObjectV1Request>} ezsignsignatureCreateObjectV1Request 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        ezsignsignatureCreateObjectV1: async (ezsignsignatureCreateObjectV1Request: Array<EzsignsignatureCreateObjectV1Request>, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'ezsignsignatureCreateObjectV1Request' is not null or undefined
            assertParamExists('ezsignsignatureCreateObjectV1', 'ezsignsignatureCreateObjectV1Request', ezsignsignatureCreateObjectV1Request)
            const localVarPath = `/1/object/ezsignsignature`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            let basePath = DUMMY_BASE_URL
            if (configuration && configuration.basePath) basePath = configuration.basePath
            const localVarUrlObj = new URL(localVarPath, basePath);
	    
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
            localVarRequestOptions.data = serializeDataIfNeeded(ezsignsignatureCreateObjectV1Request, localVarRequestOptions, configuration)

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
         * @summary Delete an existing Ezsignsignature
         * @param {number} pkiEzsignsignatureID The unique ID of the Ezsignsignature
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        ezsignsignatureDeleteObjectV1: async (pkiEzsignsignatureID: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'pkiEzsignsignatureID' is not null or undefined
            assertParamExists('ezsignsignatureDeleteObjectV1', 'pkiEzsignsignatureID', pkiEzsignsignatureID)
            const localVarPath = `/1/object/ezsignsignature/{pkiEzsignsignatureID}`
                .replace(`{${"pkiEzsignsignatureID"}}`, encodeURIComponent(String(pkiEzsignsignatureID)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            let basePath = DUMMY_BASE_URL
            if (configuration && configuration.basePath) basePath = configuration.basePath
            const localVarUrlObj = new URL(localVarPath, basePath);
	    
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
         * @summary Retrieve an existing Ezsignsignature\'s children IDs
         * @param {number} pkiEzsignsignatureID The unique ID of the Ezsignsignature
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        ezsignsignatureGetChildrenV1: async (pkiEzsignsignatureID: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'pkiEzsignsignatureID' is not null or undefined
            assertParamExists('ezsignsignatureGetChildrenV1', 'pkiEzsignsignatureID', pkiEzsignsignatureID)
            const localVarPath = `/1/object/ezsignsignature/{pkiEzsignsignatureID}/getChildren`
                .replace(`{${"pkiEzsignsignatureID"}}`, encodeURIComponent(String(pkiEzsignsignatureID)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            let basePath = DUMMY_BASE_URL
            if (configuration && configuration.basePath) basePath = configuration.basePath
            const localVarUrlObj = new URL(localVarPath, basePath);
	    
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
         * @summary Retrieve an existing Ezsignsignature
         * @param {number} pkiEzsignsignatureID The unique ID of the Ezsignsignature
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        ezsignsignatureGetObjectV1: async (pkiEzsignsignatureID: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'pkiEzsignsignatureID' is not null or undefined
            assertParamExists('ezsignsignatureGetObjectV1', 'pkiEzsignsignatureID', pkiEzsignsignatureID)
            const localVarPath = `/1/object/ezsignsignature/{pkiEzsignsignatureID}`
                .replace(`{${"pkiEzsignsignatureID"}}`, encodeURIComponent(String(pkiEzsignsignatureID)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            let basePath = DUMMY_BASE_URL
            if (configuration && configuration.basePath) basePath = configuration.basePath
            const localVarUrlObj = new URL(localVarPath, basePath);
	    
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
    }
};

/**
 * ObjectEzsignsignatureApi - functional programming interface
 * @export
 */
export const ObjectEzsignsignatureApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ObjectEzsignsignatureApiAxiosParamCreator(configuration)
    return {
        /**
         * The endpoint allows to create one or many elements at once.  The array can contain simple (Just the object) or compound (The object and its child) objects.  Creating compound elements allows to reduce the multiple requests to create all child objects.
         * @summary Create a new Ezsignsignature
         * @param {Array<EzsignsignatureCreateObjectV1Request>} ezsignsignatureCreateObjectV1Request 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async ezsignsignatureCreateObjectV1(ezsignsignatureCreateObjectV1Request: Array<EzsignsignatureCreateObjectV1Request>, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<EzsignsignatureCreateObjectV1Response>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.ezsignsignatureCreateObjectV1(ezsignsignatureCreateObjectV1Request, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Delete an existing Ezsignsignature
         * @param {number} pkiEzsignsignatureID The unique ID of the Ezsignsignature
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async ezsignsignatureDeleteObjectV1(pkiEzsignsignatureID: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<EzsignsignatureDeleteObjectV1Response>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.ezsignsignatureDeleteObjectV1(pkiEzsignsignatureID, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Retrieve an existing Ezsignsignature\'s children IDs
         * @param {number} pkiEzsignsignatureID The unique ID of the Ezsignsignature
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async ezsignsignatureGetChildrenV1(pkiEzsignsignatureID: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.ezsignsignatureGetChildrenV1(pkiEzsignsignatureID, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Retrieve an existing Ezsignsignature
         * @param {number} pkiEzsignsignatureID The unique ID of the Ezsignsignature
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async ezsignsignatureGetObjectV1(pkiEzsignsignatureID: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<EzsignsignatureGetObjectV1Response>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.ezsignsignatureGetObjectV1(pkiEzsignsignatureID, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * ObjectEzsignsignatureApi - factory interface
 * @export
 */
export const ObjectEzsignsignatureApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ObjectEzsignsignatureApiFp(configuration)
    return {
        /**
         * The endpoint allows to create one or many elements at once.  The array can contain simple (Just the object) or compound (The object and its child) objects.  Creating compound elements allows to reduce the multiple requests to create all child objects.
         * @summary Create a new Ezsignsignature
         * @param {Array<EzsignsignatureCreateObjectV1Request>} ezsignsignatureCreateObjectV1Request 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        ezsignsignatureCreateObjectV1(ezsignsignatureCreateObjectV1Request: Array<EzsignsignatureCreateObjectV1Request>, options?: any): AxiosPromise<EzsignsignatureCreateObjectV1Response> {
            return localVarFp.ezsignsignatureCreateObjectV1(ezsignsignatureCreateObjectV1Request, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Delete an existing Ezsignsignature
         * @param {number} pkiEzsignsignatureID The unique ID of the Ezsignsignature
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        ezsignsignatureDeleteObjectV1(pkiEzsignsignatureID: number, options?: any): AxiosPromise<EzsignsignatureDeleteObjectV1Response> {
            return localVarFp.ezsignsignatureDeleteObjectV1(pkiEzsignsignatureID, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Retrieve an existing Ezsignsignature\'s children IDs
         * @param {number} pkiEzsignsignatureID The unique ID of the Ezsignsignature
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        ezsignsignatureGetChildrenV1(pkiEzsignsignatureID: number, options?: any): AxiosPromise<void> {
            return localVarFp.ezsignsignatureGetChildrenV1(pkiEzsignsignatureID, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Retrieve an existing Ezsignsignature
         * @param {number} pkiEzsignsignatureID The unique ID of the Ezsignsignature
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        ezsignsignatureGetObjectV1(pkiEzsignsignatureID: number, options?: any): AxiosPromise<EzsignsignatureGetObjectV1Response> {
            return localVarFp.ezsignsignatureGetObjectV1(pkiEzsignsignatureID, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * ObjectEzsignsignatureApi - object-oriented interface
 * @export
 * @class ObjectEzsignsignatureApi
 * @extends {BaseAPI}
 */
export class ObjectEzsignsignatureApi extends BaseAPI {
    /**
     * The endpoint allows to create one or many elements at once.  The array can contain simple (Just the object) or compound (The object and its child) objects.  Creating compound elements allows to reduce the multiple requests to create all child objects.
     * @summary Create a new Ezsignsignature
     * @param {Array<EzsignsignatureCreateObjectV1Request>} ezsignsignatureCreateObjectV1Request 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ObjectEzsignsignatureApi
     */
    public ezsignsignatureCreateObjectV1(ezsignsignatureCreateObjectV1Request: Array<EzsignsignatureCreateObjectV1Request>, options?: any) {
        return ObjectEzsignsignatureApiFp(this.configuration).ezsignsignatureCreateObjectV1(ezsignsignatureCreateObjectV1Request, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Delete an existing Ezsignsignature
     * @param {number} pkiEzsignsignatureID The unique ID of the Ezsignsignature
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ObjectEzsignsignatureApi
     */
    public ezsignsignatureDeleteObjectV1(pkiEzsignsignatureID: number, options?: any) {
        return ObjectEzsignsignatureApiFp(this.configuration).ezsignsignatureDeleteObjectV1(pkiEzsignsignatureID, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Retrieve an existing Ezsignsignature\'s children IDs
     * @param {number} pkiEzsignsignatureID The unique ID of the Ezsignsignature
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ObjectEzsignsignatureApi
     */
    public ezsignsignatureGetChildrenV1(pkiEzsignsignatureID: number, options?: any) {
        return ObjectEzsignsignatureApiFp(this.configuration).ezsignsignatureGetChildrenV1(pkiEzsignsignatureID, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Retrieve an existing Ezsignsignature
     * @param {number} pkiEzsignsignatureID The unique ID of the Ezsignsignature
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ObjectEzsignsignatureApi
     */
    public ezsignsignatureGetObjectV1(pkiEzsignsignatureID: number, options?: any) {
        return ObjectEzsignsignatureApiFp(this.configuration).ezsignsignatureGetObjectV1(pkiEzsignsignatureID, options).then((request) => request(this.axios, this.basePath));
    }
}
