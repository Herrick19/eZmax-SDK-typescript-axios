/* tslint:disable */
/* eslint-disable */
/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.0.39
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
import { CommonGetAutocompleteV1Response } from '../model';
// @ts-ignore
import { RequestSignature, IHeadersData } from '../api/request-signature';
/**
 * ObjectFranchisebrokerApi - axios parameter creator
 * @export
 */
export const ObjectFranchisebrokerApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Get the list of Franchisebrokers to be used in a dropdown or autocomplete control.
         * @summary Retrieve Franchisebrokers and IDs
         * @param {'Active' | 'All'} sSelector The type of Franchisebrokers to return
         * @param {string} [sQuery] Allow to filter on the option value
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        franchisebrokerGetAutocompleteV1: async (sSelector: 'Active' | 'All', sQuery?: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'sSelector' is not null or undefined
            assertParamExists('franchisebrokerGetAutocompleteV1', 'sSelector', sSelector)
            const localVarPath = `/1/object/franchisebroker/getAutocomplete/{sSelector}`
                .replace(`{${"sSelector"}}`, encodeURIComponent(String(sSelector)));
            
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

            if (sQuery !== undefined) {
                localVarQueryParameter['sQuery'] = sQuery;
            }


    
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
 * ObjectFranchisebrokerApi - functional programming interface
 * @export
 */
export const ObjectFranchisebrokerApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ObjectFranchisebrokerApiAxiosParamCreator(configuration)
    return {
        /**
         * Get the list of Franchisebrokers to be used in a dropdown or autocomplete control.
         * @summary Retrieve Franchisebrokers and IDs
         * @param {'Active' | 'All'} sSelector The type of Franchisebrokers to return
         * @param {string} [sQuery] Allow to filter on the option value
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async franchisebrokerGetAutocompleteV1(sSelector: 'Active' | 'All', sQuery?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CommonGetAutocompleteV1Response>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.franchisebrokerGetAutocompleteV1(sSelector, sQuery, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * ObjectFranchisebrokerApi - factory interface
 * @export
 */
export const ObjectFranchisebrokerApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ObjectFranchisebrokerApiFp(configuration)
    return {
        /**
         * Get the list of Franchisebrokers to be used in a dropdown or autocomplete control.
         * @summary Retrieve Franchisebrokers and IDs
         * @param {'Active' | 'All'} sSelector The type of Franchisebrokers to return
         * @param {string} [sQuery] Allow to filter on the option value
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        franchisebrokerGetAutocompleteV1(sSelector: 'Active' | 'All', sQuery?: string, options?: any): AxiosPromise<CommonGetAutocompleteV1Response> {
            return localVarFp.franchisebrokerGetAutocompleteV1(sSelector, sQuery, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * ObjectFranchisebrokerApi - object-oriented interface
 * @export
 * @class ObjectFranchisebrokerApi
 * @extends {BaseAPI}
 */
export class ObjectFranchisebrokerApi extends BaseAPI {
    /**
     * Get the list of Franchisebrokers to be used in a dropdown or autocomplete control.
     * @summary Retrieve Franchisebrokers and IDs
     * @param {'Active' | 'All'} sSelector The type of Franchisebrokers to return
     * @param {string} [sQuery] Allow to filter on the option value
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ObjectFranchisebrokerApi
     */
    public franchisebrokerGetAutocompleteV1(sSelector: 'Active' | 'All', sQuery?: string, options?: any) {
        return ObjectFranchisebrokerApiFp(this.configuration).franchisebrokerGetAutocompleteV1(sSelector, sQuery, options).then((request) => request(this.axios, this.basePath));
    }
}
