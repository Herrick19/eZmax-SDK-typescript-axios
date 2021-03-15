/* tslint:disable */
/* eslint-disable */
/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.0.33
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
import { SsprResetPasswordRequestV1Request } from '../model';
// @ts-ignore
import { SsprResetPasswordV1Request } from '../model';
// @ts-ignore
import { SsprSendUsernamesV1Request } from '../model';
// @ts-ignore
import { SsprUnlockAccountRequestV1Request } from '../model';
// @ts-ignore
import { SsprUnlockAccountV1Request } from '../model';
// @ts-ignore
import { SsprValidateTokenV1Request } from '../model';
// @ts-ignore
import { RequestSignature, IHeadersData } from '../api/request-signature';
/**
 * ModuleSsprApi - axios parameter creator
 * @export
 */
export const ModuleSsprApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * This endpoint sends an email with a link to reset the user\'s password.  sEmailAddress must be set if eUserTypeSSPR = EzsignUser  sUserLoginname must be set if eUserTypeSSPR = Native
         * @summary Reset Password Request
         * @param {SsprResetPasswordRequestV1Request} ssprResetPasswordRequestV1Request 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        ssprResetPasswordRequestV1: async (ssprResetPasswordRequestV1Request: SsprResetPasswordRequestV1Request, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'ssprResetPasswordRequestV1Request' is not null or undefined
            assertParamExists('ssprResetPasswordRequestV1', 'ssprResetPasswordRequestV1Request', ssprResetPasswordRequestV1Request)
            const localVarPath = `/1/module/sspr/resetPasswordRequest`;
            
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
            localVarRequestOptions.data = serializeDataIfNeeded(ssprResetPasswordRequestV1Request, localVarRequestOptions, configuration)

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
         * This endpoint resets the user\'s password.  sEmailAddress must be set if eUserTypeSSPR = EzsignUser  sUserLoginname must be set if eUserTypeSSPR = Native
         * @summary Reset Password
         * @param {SsprResetPasswordV1Request} ssprResetPasswordV1Request 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        ssprResetPasswordV1: async (ssprResetPasswordV1Request: SsprResetPasswordV1Request, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'ssprResetPasswordV1Request' is not null or undefined
            assertParamExists('ssprResetPasswordV1', 'ssprResetPasswordV1Request', ssprResetPasswordV1Request)
            const localVarPath = `/1/module/sspr/resetPassword`;
            
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
            localVarRequestOptions.data = serializeDataIfNeeded(ssprResetPasswordV1Request, localVarRequestOptions, configuration)

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
         * This endpoint returns an email with the username(s) matching the email address provided in case of forgotten username
         * @summary Send username(s)
         * @param {SsprSendUsernamesV1Request} ssprSendUsernamesV1Request 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        ssprSendUsernamesV1: async (ssprSendUsernamesV1Request: SsprSendUsernamesV1Request, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'ssprSendUsernamesV1Request' is not null or undefined
            assertParamExists('ssprSendUsernamesV1', 'ssprSendUsernamesV1Request', ssprSendUsernamesV1Request)
            const localVarPath = `/1/module/sspr/sendUsernames`;
            
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
            localVarRequestOptions.data = serializeDataIfNeeded(ssprSendUsernamesV1Request, localVarRequestOptions, configuration)

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
         * This endpoint sends an email with a link to unlock the user account.  sEmailAddress must be set if eUserTypeSSPR = EzsignUser  sUserLoginname must be set if eUserTypeSSPR = Native
         * @summary Unlock Account Request
         * @param {SsprUnlockAccountRequestV1Request} ssprUnlockAccountRequestV1Request 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        ssprUnlockAccountRequestV1: async (ssprUnlockAccountRequestV1Request: SsprUnlockAccountRequestV1Request, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'ssprUnlockAccountRequestV1Request' is not null or undefined
            assertParamExists('ssprUnlockAccountRequestV1', 'ssprUnlockAccountRequestV1Request', ssprUnlockAccountRequestV1Request)
            const localVarPath = `/1/module/sspr/unlockAccountRequest`;
            
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
            localVarRequestOptions.data = serializeDataIfNeeded(ssprUnlockAccountRequestV1Request, localVarRequestOptions, configuration)

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
         * This endpoint unlocks the user account.  sEmailAddress must be set if eUserTypeSSPR = EzsignUser  sUserLoginname must be set if eUserTypeSSPR = Native
         * @summary Unlock Account
         * @param {SsprUnlockAccountV1Request} ssprUnlockAccountV1Request 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        ssprUnlockAccountV1: async (ssprUnlockAccountV1Request: SsprUnlockAccountV1Request, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'ssprUnlockAccountV1Request' is not null or undefined
            assertParamExists('ssprUnlockAccountV1', 'ssprUnlockAccountV1Request', ssprUnlockAccountV1Request)
            const localVarPath = `/1/module/sspr/unlockAccount`;
            
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
            localVarRequestOptions.data = serializeDataIfNeeded(ssprUnlockAccountV1Request, localVarRequestOptions, configuration)

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
         * This endpoint validates if a Token is valid and not expired.  sEmailAddress must be set if eUserTypeSSPR = EzsignUser  sUserLoginname must be set if eUserTypeSSPR = Native
         * @summary Validate Token
         * @param {SsprValidateTokenV1Request} ssprValidateTokenV1Request 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        ssprValidateTokenV1: async (ssprValidateTokenV1Request: SsprValidateTokenV1Request, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'ssprValidateTokenV1Request' is not null or undefined
            assertParamExists('ssprValidateTokenV1', 'ssprValidateTokenV1Request', ssprValidateTokenV1Request)
            const localVarPath = `/1/module/sspr/validateToken`;
            
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
            localVarRequestOptions.data = serializeDataIfNeeded(ssprValidateTokenV1Request, localVarRequestOptions, configuration)

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
 * ModuleSsprApi - functional programming interface
 * @export
 */
export const ModuleSsprApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ModuleSsprApiAxiosParamCreator(configuration)
    return {
        /**
         * This endpoint sends an email with a link to reset the user\'s password.  sEmailAddress must be set if eUserTypeSSPR = EzsignUser  sUserLoginname must be set if eUserTypeSSPR = Native
         * @summary Reset Password Request
         * @param {SsprResetPasswordRequestV1Request} ssprResetPasswordRequestV1Request 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async ssprResetPasswordRequestV1(ssprResetPasswordRequestV1Request: SsprResetPasswordRequestV1Request, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.ssprResetPasswordRequestV1(ssprResetPasswordRequestV1Request, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * This endpoint resets the user\'s password.  sEmailAddress must be set if eUserTypeSSPR = EzsignUser  sUserLoginname must be set if eUserTypeSSPR = Native
         * @summary Reset Password
         * @param {SsprResetPasswordV1Request} ssprResetPasswordV1Request 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async ssprResetPasswordV1(ssprResetPasswordV1Request: SsprResetPasswordV1Request, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.ssprResetPasswordV1(ssprResetPasswordV1Request, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * This endpoint returns an email with the username(s) matching the email address provided in case of forgotten username
         * @summary Send username(s)
         * @param {SsprSendUsernamesV1Request} ssprSendUsernamesV1Request 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async ssprSendUsernamesV1(ssprSendUsernamesV1Request: SsprSendUsernamesV1Request, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.ssprSendUsernamesV1(ssprSendUsernamesV1Request, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * This endpoint sends an email with a link to unlock the user account.  sEmailAddress must be set if eUserTypeSSPR = EzsignUser  sUserLoginname must be set if eUserTypeSSPR = Native
         * @summary Unlock Account Request
         * @param {SsprUnlockAccountRequestV1Request} ssprUnlockAccountRequestV1Request 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async ssprUnlockAccountRequestV1(ssprUnlockAccountRequestV1Request: SsprUnlockAccountRequestV1Request, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.ssprUnlockAccountRequestV1(ssprUnlockAccountRequestV1Request, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * This endpoint unlocks the user account.  sEmailAddress must be set if eUserTypeSSPR = EzsignUser  sUserLoginname must be set if eUserTypeSSPR = Native
         * @summary Unlock Account
         * @param {SsprUnlockAccountV1Request} ssprUnlockAccountV1Request 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async ssprUnlockAccountV1(ssprUnlockAccountV1Request: SsprUnlockAccountV1Request, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.ssprUnlockAccountV1(ssprUnlockAccountV1Request, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * This endpoint validates if a Token is valid and not expired.  sEmailAddress must be set if eUserTypeSSPR = EzsignUser  sUserLoginname must be set if eUserTypeSSPR = Native
         * @summary Validate Token
         * @param {SsprValidateTokenV1Request} ssprValidateTokenV1Request 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async ssprValidateTokenV1(ssprValidateTokenV1Request: SsprValidateTokenV1Request, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.ssprValidateTokenV1(ssprValidateTokenV1Request, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * ModuleSsprApi - factory interface
 * @export
 */
export const ModuleSsprApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ModuleSsprApiFp(configuration)
    return {
        /**
         * This endpoint sends an email with a link to reset the user\'s password.  sEmailAddress must be set if eUserTypeSSPR = EzsignUser  sUserLoginname must be set if eUserTypeSSPR = Native
         * @summary Reset Password Request
         * @param {SsprResetPasswordRequestV1Request} ssprResetPasswordRequestV1Request 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        ssprResetPasswordRequestV1(ssprResetPasswordRequestV1Request: SsprResetPasswordRequestV1Request, options?: any): AxiosPromise<void> {
            return localVarFp.ssprResetPasswordRequestV1(ssprResetPasswordRequestV1Request, options).then((request) => request(axios, basePath));
        },
        /**
         * This endpoint resets the user\'s password.  sEmailAddress must be set if eUserTypeSSPR = EzsignUser  sUserLoginname must be set if eUserTypeSSPR = Native
         * @summary Reset Password
         * @param {SsprResetPasswordV1Request} ssprResetPasswordV1Request 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        ssprResetPasswordV1(ssprResetPasswordV1Request: SsprResetPasswordV1Request, options?: any): AxiosPromise<void> {
            return localVarFp.ssprResetPasswordV1(ssprResetPasswordV1Request, options).then((request) => request(axios, basePath));
        },
        /**
         * This endpoint returns an email with the username(s) matching the email address provided in case of forgotten username
         * @summary Send username(s)
         * @param {SsprSendUsernamesV1Request} ssprSendUsernamesV1Request 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        ssprSendUsernamesV1(ssprSendUsernamesV1Request: SsprSendUsernamesV1Request, options?: any): AxiosPromise<void> {
            return localVarFp.ssprSendUsernamesV1(ssprSendUsernamesV1Request, options).then((request) => request(axios, basePath));
        },
        /**
         * This endpoint sends an email with a link to unlock the user account.  sEmailAddress must be set if eUserTypeSSPR = EzsignUser  sUserLoginname must be set if eUserTypeSSPR = Native
         * @summary Unlock Account Request
         * @param {SsprUnlockAccountRequestV1Request} ssprUnlockAccountRequestV1Request 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        ssprUnlockAccountRequestV1(ssprUnlockAccountRequestV1Request: SsprUnlockAccountRequestV1Request, options?: any): AxiosPromise<void> {
            return localVarFp.ssprUnlockAccountRequestV1(ssprUnlockAccountRequestV1Request, options).then((request) => request(axios, basePath));
        },
        /**
         * This endpoint unlocks the user account.  sEmailAddress must be set if eUserTypeSSPR = EzsignUser  sUserLoginname must be set if eUserTypeSSPR = Native
         * @summary Unlock Account
         * @param {SsprUnlockAccountV1Request} ssprUnlockAccountV1Request 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        ssprUnlockAccountV1(ssprUnlockAccountV1Request: SsprUnlockAccountV1Request, options?: any): AxiosPromise<void> {
            return localVarFp.ssprUnlockAccountV1(ssprUnlockAccountV1Request, options).then((request) => request(axios, basePath));
        },
        /**
         * This endpoint validates if a Token is valid and not expired.  sEmailAddress must be set if eUserTypeSSPR = EzsignUser  sUserLoginname must be set if eUserTypeSSPR = Native
         * @summary Validate Token
         * @param {SsprValidateTokenV1Request} ssprValidateTokenV1Request 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        ssprValidateTokenV1(ssprValidateTokenV1Request: SsprValidateTokenV1Request, options?: any): AxiosPromise<void> {
            return localVarFp.ssprValidateTokenV1(ssprValidateTokenV1Request, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * ModuleSsprApi - object-oriented interface
 * @export
 * @class ModuleSsprApi
 * @extends {BaseAPI}
 */
export class ModuleSsprApi extends BaseAPI {
    /**
     * This endpoint sends an email with a link to reset the user\'s password.  sEmailAddress must be set if eUserTypeSSPR = EzsignUser  sUserLoginname must be set if eUserTypeSSPR = Native
     * @summary Reset Password Request
     * @param {SsprResetPasswordRequestV1Request} ssprResetPasswordRequestV1Request 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ModuleSsprApi
     */
    public ssprResetPasswordRequestV1(ssprResetPasswordRequestV1Request: SsprResetPasswordRequestV1Request, options?: any) {
        return ModuleSsprApiFp(this.configuration).ssprResetPasswordRequestV1(ssprResetPasswordRequestV1Request, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * This endpoint resets the user\'s password.  sEmailAddress must be set if eUserTypeSSPR = EzsignUser  sUserLoginname must be set if eUserTypeSSPR = Native
     * @summary Reset Password
     * @param {SsprResetPasswordV1Request} ssprResetPasswordV1Request 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ModuleSsprApi
     */
    public ssprResetPasswordV1(ssprResetPasswordV1Request: SsprResetPasswordV1Request, options?: any) {
        return ModuleSsprApiFp(this.configuration).ssprResetPasswordV1(ssprResetPasswordV1Request, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * This endpoint returns an email with the username(s) matching the email address provided in case of forgotten username
     * @summary Send username(s)
     * @param {SsprSendUsernamesV1Request} ssprSendUsernamesV1Request 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ModuleSsprApi
     */
    public ssprSendUsernamesV1(ssprSendUsernamesV1Request: SsprSendUsernamesV1Request, options?: any) {
        return ModuleSsprApiFp(this.configuration).ssprSendUsernamesV1(ssprSendUsernamesV1Request, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * This endpoint sends an email with a link to unlock the user account.  sEmailAddress must be set if eUserTypeSSPR = EzsignUser  sUserLoginname must be set if eUserTypeSSPR = Native
     * @summary Unlock Account Request
     * @param {SsprUnlockAccountRequestV1Request} ssprUnlockAccountRequestV1Request 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ModuleSsprApi
     */
    public ssprUnlockAccountRequestV1(ssprUnlockAccountRequestV1Request: SsprUnlockAccountRequestV1Request, options?: any) {
        return ModuleSsprApiFp(this.configuration).ssprUnlockAccountRequestV1(ssprUnlockAccountRequestV1Request, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * This endpoint unlocks the user account.  sEmailAddress must be set if eUserTypeSSPR = EzsignUser  sUserLoginname must be set if eUserTypeSSPR = Native
     * @summary Unlock Account
     * @param {SsprUnlockAccountV1Request} ssprUnlockAccountV1Request 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ModuleSsprApi
     */
    public ssprUnlockAccountV1(ssprUnlockAccountV1Request: SsprUnlockAccountV1Request, options?: any) {
        return ModuleSsprApiFp(this.configuration).ssprUnlockAccountV1(ssprUnlockAccountV1Request, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * This endpoint validates if a Token is valid and not expired.  sEmailAddress must be set if eUserTypeSSPR = EzsignUser  sUserLoginname must be set if eUserTypeSSPR = Native
     * @summary Validate Token
     * @param {SsprValidateTokenV1Request} ssprValidateTokenV1Request 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ModuleSsprApi
     */
    public ssprValidateTokenV1(ssprValidateTokenV1Request: SsprValidateTokenV1Request, options?: any) {
        return ModuleSsprApiFp(this.configuration).ssprValidateTokenV1(ssprValidateTokenV1Request, options).then((request) => request(this.axios, this.basePath));
    }
}
