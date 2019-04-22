import {createAction} from "redux-actions";

export const WatchCurrencyPairActionType = 'Rate/watch';
export const UnwatchCurrencyPairActionType = 'Rate/unwatch';

export const AddRateActionType = 'Rate/add';
export const UpdateRateActionType = 'Rate/update';
export const DeleteRateActionType = 'Rate/delete';

export const watchRateAction = createAction(WatchCurrencyPairActionType);
export const unwatchRateAction = createAction(UnwatchCurrencyPairActionType);

export const addRateAction = createAction(AddRateActionType);
export const updateRateAction = createAction(UpdateRateActionType);
export const deleteRateAction = createAction(DeleteRateActionType);
