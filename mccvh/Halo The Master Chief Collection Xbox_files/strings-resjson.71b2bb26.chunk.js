(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[120],{"0kdQ":function(e,t,i){"use strict";function o(e){return o[e]||(o[e]=new Intl.NumberFormat(e))}function a(e,t,i){return o(e).format(t-i)}function r(e,t,i,o,a){if({}.hasOwnProperty.call(o,e))return o[e];t&&(e-=t);var r=i(e,a);return r in o?o[r]:o.other}i.d(t,"a",(function(){return a})),i.d(t,"b",(function(){return r}))},WqqC:function(e,t,i){"use strict";i.d(t,"a",(function(){return n})),i.d(t,"b",(function(){return s})),i.d(t,"c",(function(){return l})),i.d(t,"d",(function(){return c})),i.d(t,"e",(function(){return u})),i.d(t,"f",(function(){return d})),i.d(t,"g",(function(){return m})),i.d(t,"h",(function(){return p})),i.d(t,"i",(function(){return g})),i.d(t,"j",(function(){return h})),i.d(t,"k",(function(){return b})),i.d(t,"l",(function(){return T})),i.d(t,"m",(function(){return y})),i.d(t,"n",(function(){return f})),i.d(t,"o",(function(){return A})),i.d(t,"p",(function(){return S})),i.d(t,"q",(function(){return w})),i.d(t,"r",(function(){return x})),i.d(t,"s",(function(){return P})),i.d(t,"t",(function(){return L})),i.d(t,"u",(function(){return v})),i.d(t,"v",(function(){return C})),i.d(t,"w",(function(){return R})),i.d(t,"x",(function(){return B})),i.d(t,"y",(function(){return E})),i.d(t,"z",(function(){return O})),i.d(t,"A",(function(){return F})),i.d(t,"B",(function(){return I}));const o=e=>1==e?"one":"other",a=e=>{const t=!String(e).split(".")[1];return 1==e&&t?"one":"other"},r=e=>"other",n=e=>{const t=String(e).split("."),i=Number(t[0])==e&&t[0].slice(-2);return 0==e?"zero":1==e?"one":2==e?"two":i>=3&&i<=10?"few":i>=11&&i<=99?"many":"other"},s=e=>{const t=String(e).split("."),i=t[0],o=!t[1];return 1==e&&o?"one":i>=2&&i<=4&&o?"few":o?"other":"many"},l=e=>{const t=String(e).split("."),i=t[0],o=Number(t[0])==e;return 1!=e&&(o||0!=i&&1!=i)?"other":"one"},c=a,u=o,d=a,m=e=>{const t=String(e).split("."),i=t[0],o=!t[1],a=i.slice(-6);return 1==e?"one":0!=i&&0==a&&o?"many":"other"},p=a,g=e=>{const t=String(e).split("."),i=t[0],o=!t[1],a=i.slice(-6);return e>=0&&e<2?"one":0!=i&&0==a&&o?"many":"other"},h=e=>{const t=String(e).split("."),i=t[0],o=!t[1],a=Number(t[0])==e,r=a&&t[0].slice(-1);return 1==e&&o?"one":2==i&&o?"two":o&&(e<0||e>10)&&a&&0==r?"many":"other"},b=o,T=r,y=e=>{const t=String(e).split("."),i=t[0],o=!t[1],a=i.slice(-6);return 1==e&&o?"one":0!=i&&0==a&&o?"many":"other"},f=r,A=r,S=o,w=a,x=e=>{const t=String(e).split("."),i=t[0],o=!t[1],a=i.slice(-1),r=i.slice(-2);return 1==e&&o?"one":o&&a>=2&&a<=4&&(r<12||r>14)?"few":o&&1!=i&&(0==a||1==a)||o&&a>=5&&a<=9||o&&r>=12&&r<=14?"many":"other"},P=e=>{const t=String(e).split("."),i=t[0],o=!t[1],a=i.slice(-6);return 0==i||1==i?"one":0!=i&&0==a&&o?"many":"other"},L=e=>{const t=String(e).split("."),i=t[0],o=!t[1],a=i.slice(-6);return 1==e&&o?"one":0!=i&&0==a&&o?"many":"other"},v=e=>{const t=String(e).split("."),i=t[0],o=!t[1],a=i.slice(-1),r=i.slice(-2);return o&&1==a&&11!=r?"one":o&&a>=2&&a<=4&&(r<12||r>14)?"few":o&&0==a||o&&a>=5&&a<=9||o&&r>=11&&r<=14?"many":"other"},C=e=>{const t=String(e).split("."),i=t[0],o=!t[1];return 1==e&&o?"one":i>=2&&i<=4&&o?"few":o?"other":"many"},R=a,B=r,E=o,O=e=>{const t=String(e).split("."),i=t[0],o=!t[1],a=i.slice(-1),r=i.slice(-2);return o&&1==a&&11!=r?"one":o&&a>=2&&a<=4&&(r<12||r>14)?"few":o&&0==a||o&&a>=5&&a<=9||o&&r>=11&&r<=14?"many":"other"},F=r,I=r},lq3P:function(e,t,i){"use strict";i.r(t);var o=i("WqqC"),a=i("0kdQ");t.default={homePageTitle:()=>"Home",wishlistPageTitle:()=>"Xbox wish list",wishlistPageSubtitle:()=>"Keep track of your most wanted games, add-ons, and more with the Xbox wish list. Sign in or create a Microsoft account to manage your wish list.",wishlistPageSeoKeywords:()=>"xbox wish list, wish list xbox",wishlistSettings:()=>"Settings",wishlistGiftUnavailableText:()=>"This product is not eligible for gifting",wishlistAcknowledgeButtonText:()=>"GOT IT",wishlistAcknowledgeButtonAccessibilityLabel:()=>"got it",wishlistSettingsMenuSharePrivacyMessage:()=>"I can share this list with others, and anyone can find and view it",wishlistSettingsNotificationOptInMessge:()=>"Send me notifications if an item on my wish list goes on sale",wishlistSettingsSaveSuccessText:()=>"Wish list settings saved",wishlistSettingsErrorText:()=>"Something went wrong. Please try again.",wishlistSharingTitle:()=>"Share your wish list with others",wishlistSharingAccessibilityLabel:()=>"Share wish list",wishlistSharingPrivateListTitle:()=>"This list is private and can't be shared",wishlistSharingPrivateListText:()=>"You can change it here or access it later in your list settings",sharedWishlistPageTitle:()=>"Shared wish list",sharedWishlistTitleWithGamerTag:e=>e[0]+"'s wish list",sharedWishlistErrorTitle:()=>"Shared wish list is unavailable",sharedWishlistPrivacyErrorBody:()=>"Their wish list can't be shown because it has been changed to private.",sharedWishlistNotFoundErrorBody:()=>"This wish list could not be found. It may have been deleted",shareLinkCopiedToClipBoardText:()=>"Copied to clipboard",shareLinkCopyToClipBoardText:()=>"Copy to clipboard",welcomeText:()=>"Welcome to Project Greenland!",welcomeDescription:e=>"To get started, edit "+e[0]+" or "+e[1]+" and save to reload",xboxConsoleAltText:()=>"Xbox Console Image",signInLink:()=>"SIGN IN",signInLinkAccessibilityTemplate:e=>"Sign in to "+e[0],createAccountLink:()=>"CREATE AN ACCOUNT",createAccountLinkAccessibilityText:()=>"Create a Microsoft account",closeBanner:()=>"Close Banner",closeContextualStore:()=>"Close Store",warningAccessibilityLabel:()=>"Warning",errorAccessibilityLabel:()=>"Error",errorCodeTemplate:e=>"Error code: "+e[0],genericErrorMessage:()=>"Something went wrong. Try refreshing the page.",errorPageMessage:()=>"We are sorry, the page you requested cannot be found.",errorPageSubMessage:()=>"The URL may be misspelled or the page you're looking for is no longer available.",userSignedOutBannerMessageError:()=>"Sorry, you were signed out unexpectedly. Sign back in to continue.",localePickerHeader:()=>"Choose your market and language preference:",localePickerAmericaRegionSelectionTitle:()=>"AMERICA",localePickerEuropeRegionSelectionTitle:()=>"EUROPE",localePickerAsiaPacificRegionSelectionTitle:()=>"ASIA + PACIFIC",localePickerMiddleEastAfricaRegionSelectionTitle:()=>"MIDDLE EAST + AFRICA",cartCardSelectButtonText:()=>"Select",starRatingReviewsCountTextFormat:e=>"("+e[0]+")",starRatingReviewsCountAccessibleTextFormat:e=>e[0]+" total reviews",starRatingAccessibleTextFormat:e=>"Rated "+e[0]+" out of 5 stars",accountLinkStartTitle:()=>"Link your accounts",accountLinkStartButton:()=>"LINK ACCOUNTS",accountLinkStartButtonAccessibilityText:()=>"Link accounts",accountLinkCompleteTitle:()=>"Confirm account linking",accountLinkCompleteButton:()=>"COMPLETE LINK",accountLinkCompleteButtonAccessibilityText:()=>"Complete link",accountLinkCompleteSuccess:()=>"Success! Your accounts are now linked.",accountLinkCompleteAlreadyLinked:()=>"These accounts are already linked.",accountLinkCompleteTokenMissing:()=>"There was an error completing the link for your accounts. Try again later.",accountLinkCompletePartnerLinkedToAnotherXboxAccount:e=>"This "+e.networkName+" account is already linked to another Xbox account.",accountLinkCompleteXboxLinkedToAnotherPartnerAccount:e=>"This Xbox account is already linked to another "+e.networkName+" account.",accountLinkCompleteError:()=>"There was an error completing the link for your accounts. Try again later.",accountLinkStatusFetchError:()=>"There was an error getting account details. Try again later.",bundleHeaderPricePreText:()=>"Estimated bundle price:",bundleHeaderCheckoutButtonText:()=>"Checkout",bundleHeaderCheckoutButtonAccessibleText:()=>"Checkout bundle",buttonWithStateAccessibilityTemplate:e=>e[0]+", "+e[1],bundleSlotChannelDefaultTitleSingleSelect:()=>"Select a product",bundleSlotChannelDefaultTitleMultiSelect:()=>"Select products",cardSelectButtonOutOfStockStateLabelText:()=>"Out of stock",cardSelectButtonActiveStateLabelText:()=>"Select",cardSelectButtonSelectedStateLabelText:()=>"Selected",cardSelectButtonInActiveStateLabelText:()=>"Unselect",cardSelectButtonUnselectedStateLabelText:()=>"Unselected",cardSelectButtonDisabledStateAccessibleLabelText:()=>"Disabled",editText:()=>"Edit",editTextAccessibilityTemplate:e=>"Edit "+e[0],shareText:()=>"Share",noWishlistItemMessage:()=>"You haven't added anything to your wish list yet",joinActionText:()=>"Join",joinActionAccessibilityText:e=>"Join "+e[0],joinActionAccessibilityTextWithPrice:e=>"Join "+e[0]+" for "+e[1],buyActionText:()=>"Buy",buyActionAccessibilityText:e=>"Buy "+e[0],buyActionAccessibilityTextWithPrice:e=>"Buy "+e[0]+" for "+e[1],upgradeActionText:()=>"Upgrade",upgradeActionAccessibilityText:e=>"Upgrade "+e[0],upgradeActionAccessibilityTextWithPrice:e=>"Upgrade "+e[0]+" for "+e[1],getActionText:()=>"Get",getActionAccessibilityText:e=>"Get "+e[0],getActionAccessibilityTextWithPrice:e=>"Get "+e[0]+" for "+e[1],viewDetailsActionText:()=>"DETAILS",removeActionText:()=>"REMOVE",removeActionAccessibilityText:e=>"Remove "+e[0],viewDetailsActionAccessibilityText:e=>"View details for "+e[0],productCardPreOrderFooterMessage:()=>"PRE-ORDER",productCardJustForYouFooterMessage:()=>"JUST FOR YOU",productCardDiscountTagFormat:e=>"-"+e[0]+"%",withText:()=>"with",withEAPlayText:()=>"with EA Play",withGamePassText:()=>"with Game Pass",withGamePassUltimateText:()=>"with Game Pass Ultimate",withPCGamePassText:()=>"with PC Game Pass",withXboxLiveGoldText:()=>"with Xbox Live Gold",freeText:()=>"Free",priceWithAfterTextAccessibilityTemplate:e=>e[0]+" "+e[1],discountedPriceWithAfterTextAccessibilityTemplate:e=>"Original price "+e[0]+", on sale for "+e[1]+" "+e[2],pricePercentageOffTemplate:e=>e[0]+"% off",offerExpirationTemplate:e=>"Offer expires in "+e[0],closeButtonText:()=>"Close",genericPurchaseErrorMessage:()=>"Sorry, we can\u2019t complete your purchase right now. Try again in a while.",genericRemoveWishlistItemErrorMessage:e=>"Sorry, we can't remove "+e[0]+" right now. Try again in a while.",ownedText:()=>"Owned",loadingText:()=>"Loading...",tryAgainText:()=>"Try again",saveYourFavoritesText:()=>"Save your favorites",saveYourFavoritesSubText:()=>"Add your items in one convenient location",accessEverywhereText:()=>"Access everywhere",accessEverywhereSubText:()=>"Access your wish list on Xbox.com, Xbox consoles, and the Xbox app on iOS, Android and Windows.",buyYourSavesText:()=>"Buy your saves",buyYourSavesSubText:()=>"Buy items saved directly from your wish list.",pageTitleTemplate:e=>e[0]+" | Xbox",defaultPageTitle:()=>"Xbox Official Site: Consoles, Games and Community | Xbox",moreText:()=>"More",moreTextAccessibilityLabel:()=>"Show more content",lessText:()=>"Less",lessTextAccessibilityLabel:()=>"Show less content",addToCartActionText:()=>"Add to cart",RemoveText:()=>"Remove",ItemsSelectedTemplate:e=>e[0]+" items selected",requiredItemNotSelectedError:()=>"Please select the required items",bundlePageGenericErrorText:()=>"Something went wrong. Please try again in a while.",cartPageTitle:()=>"Shopping cart",checkoutPageTitle:()=>"Checking out",checkoutThankYouPageTitle:()=>"Thank you for your order",bundleBuilderPageTitleTemplate:e=>"Configure your "+e[0],bundleBuilderPageGenericTitle:()=>"Configure your product",estimatedDeliveryDateTemplate:e=>"Get it as soon as "+e[0],savingsBadgeTextTemplate:e=>"Save "+e[0],bundleBuilderAccessibilityHint:()=>"Select items below to complete your bundle.",addToWishListText:()=>"Add to wish list",addToWishListAccessibilityTemplate:e=>"Add "+e[0]+" to wish list",removeFromWishListText:()=>"Remove from wish list",removeFromWishListAccessibilityTemplate:e=>"Remove "+e[0]+" to wish list",selectOfferText:()=>"Select offer",continueText:()=>"CONTINUE",descriptionComponentTitle:()=>"Description",descriptionPublishedByTitle:()=>"Published by",descriptionDevelopedByTitle:()=>"Developed by",descriptionReleaseDateTitle:()=>"Release date",playableOnTitle:()=>"Playable on",capabilitiesTitle:()=>"Capabilities",successText:()=>"Success!",successTextAccessibilityTemplate:e=>e[0]+" successfully purchased, click continue to exit.",successGamePassTextAccessibilityTemplate:e=>e[0]+" successfully purchased. Click to download the Xbox App for PC.",gamePassUltimateLogoAltText:()=>"Game Pass Ultimate Logo",productThankYouText:()=>"Thank you for your purchase.",productAvailableToYouText:()=>"This product is now available to you.",subscriptionThankYouText:()=>"Thanks for joining",giftProductThankYouTitle:()=>"Your gift is on its way!",giftProductRecipientGettingSoon:()=>"Your recipient should be getting it soon.",giftProductTrackOrderAtText:e=>"You can track this order at "+e[0],giftAccountsLinkText:()=>"account.microsoft.com/billing/orders",downloadXboxAppText:()=>"DOWNLOAD THE XBOX APP",contextualStoreGenericErrorMessage:()=>"Something went wrong. Please try again in a while.",ratingText:()=>"Rating",learnMoreText:()=>"Learn more",gamerPicAltText:()=>"Gamer Picture",monthlyRecurrenceDisplayStringFormat:e=>e[0]+"/month",monthlyRecurrenceAccessibilityLabelFormat:e=>e[0]+" per month",quarterlyRecurrenceDisplayStringFormat:e=>e[0]+"/quarter",quarterlyRecurrenceAccessibilityLabelFormat:e=>e[0]+" per quarter",yearlyRecurrenceDisplayStringFormat:e=>e[0]+"/year",yearlyRecurrenceAccessibilityLabelFormat:e=>e[0]+" per year",preorderActionText:()=>"Pre-order",preorderActionAccessibilityText:e=>"Preorder "+e[0],preorderActionAccessibilityTextWithPrice:e=>"Preorder "+e[0]+" for "+e[1],buyToOwnActionText:()=>"Buy to own",buyToOwnActionAccessibilityText:e=>"Buy to own "+e[0],buyToOwnActionAccessibilityTextWithPrice:e=>"Buy to own "+e[0]+" for "+e[1],extendActionText:()=>"Extend subscription",extendActionAccessibilityLabelFormat:e=>"Extend your "+e[0]+" subscription",dotSeparatorTemplate:e=>e[0]+" \u2022 "+e[1],orSeparatorText:()=>"- OR -",commaSeparatorTemplate:e=>e[0]+", "+e[1],periodSeparatorTemplate:e=>e[0]+". "+e[1],inAppPurchaseLegalNotice:()=>"+Offers in-app purchases.",xboxLiveGoldRequiredLegalNotice:()=>"Game requires Xbox subscription to play on console (subscription sold separately).",xboxLiveGoldRequiredLegalNoticeTooltip:()=>"Game requires Xbox Game Pass Ultimate or Xbox Live Gold to play on console (subscription sold separately).",xboxLiveGoldRequiredForOnlineMultiplayerLegalNotice:()=>"Online multiplayer on console requires Xbox subscription (sold separately).",xboxLiveGoldRequiredForOnlineMultiplayerLegalNoticeTooltip:()=>"Online multiplayer on console requires Xbox Game Pass Ultimate or Xbox Live Gold (subscription sold separately).",subscriptionRecurrenceLegalNotice:()=>"After any promotional period, subscription continues to be charged at the regular price and specified interval, unless cancelled in Microsoft account.",languageSupportLegalNotice:()=>"Language support may vary depending on Store region and initial download.",dlcRequiresGameLegalNotice:()=>"This content requires a game (sold separately).",cloudEnabledLegalNotice:()=>"Cloud enabled game while in Xbox Game Pass Ultimate.",ceroZLegalNotice:()=>"CERO-Z designated games can only be purchased with a credit card.",subscriptionLegalNotice:()=>"Subscription continues automatically unless cancelled through your Microsoft Account.",subscriptionSeeTermsLinkLegalNotice:()=>"See terms.",subscriptionUKOnlyLegalNotice:()=>"Subscription continues to be charged at the regular price and selected term, unless cancelled in Microsoft account.",subscriptionLearnMoreLinkLegalNotice:()=>"Learn about recurring billing.",purchaseUnavailableOnWebLegalDisclaimer:()=>"You can buy this product on your Xbox console (your region does not support purchases through Xbox.com).",xboxPlayAnywhereText:()=>"Xbox Play Anywhere",productIsBundleText:()=>"This item is a bundle",onSaleTagTemplate:e=>"On sale: save "+e[0],onSaleTagTemplateWithDaysRemaining:e=>"On sale: save "+e[0]+", "+e[1],daysRemainingWithFormatRules:e=>"[[1]ends in "+e[0]+" day][[*]ends in "+e[0]+" days]",daysRemaining:e=>Object(a.b)(e.days,0,o.f,{one:"ends in 1 day",other:"ends in "+e.days+" days"}),cloudEnabledText:()=>"Cloud enabled",optimizedForXboxSeriesXSText:()=>"OPTIMIZED FOR XBOX SERIES X|S",xboxOneXEnhancedText:()=>"Xbox One X Enhanced",smartText:()=>"SMART",deliveryText:()=>"DELIVERY",screenshotsGalleryTitle:()=>"Gallery",screenshotAltTextTemplate:e=>"Screenshots & Trailers "+e[0]+" of "+e[1]+". "+e[2],addToCartButtonAccessibilityLabelFormat:e=>"Add "+e[0]+" to cart",addToCartProcessingButtonAccessibilityLabelFormat:e=>"Adding "+e[0]+" to cart. Please wait",mediaViewerHeaderTemplate:e=>"Screenshots & Trailers ("+e[0]+"/"+e[1]+")",previousMediaButtonAccessibilityLabel:()=>"Previous",nextMediaButtonAccessibilityLabel:()=>"Next",addToWishlistProcessingButtonAccessibilityLabelFormat:e=>"Adding "+e[0]+" to wish list. Please wait",openWishlistButtonAccessibilityLabel:()=>"Open wish list",upsellGetFormat:e=>"Get "+e[0],upsellIncludedWithFormat:e=>"Included with "+e[0],inclusionUpsellButtonAccessibilityLabelFormat:e=>"Get "+e[0]+" to play "+e[1]+" included with your subscription",upsellSaveWithFormat:e=>"Save "+e[0]+" with "+e[1],saleUpsellButtonAccessibilityLabelFormat:e=>"Get "+e[0]+" to save "+e[1]+" on "+e[2]+" included with your subscription",actionFetchErrorMessage:()=>"Error loading available actions",reloadPageRequestMessage:()=>"Oops! Something went wrong. Please try to reload the page.",reloadPageButtonText:()=>"RELOAD PAGE",cancelButtonText:()=>"CANCEL",saveButtonText:()=>"SAVE",errorButtonText:()=>"ERROR",cancelButtonAccessibilityLabel:()=>"cancel",saveButtonAccessibilityLabel:()=>"save",errorButtonAccessibilityLabel:()=>"An error has occurred. Press for details",pleaseTryAgainMessage:()=>"Please try again",additionalInfoTitle:()=>"Additional info",additionalInfoPublishedBy:()=>"Published by",additionalInfoDevelopedBy:()=>"Developed by",additionalInfoReleaseDate:()=>"Release date",additionalInfoApproximateSize:()=>"Approximate size",additionalInfoAgeRating:()=>"Age rating",additionalInfoCategories:()=>"Categories",additionalInfoInstallation:()=>"Installation",additionalInfoAdditionalTerms:()=>"Additional terms",additionalInfoXboxLiveCodeOfConduct:()=>"Xbox Live code of conduct",additionalInfoPrivacyPolicyFormat:e=>e[0]+" privacy policy",additionalInfoTermsOfTransaction:()=>"Terms of transaction",additionalInfoInAppPurchases:()=>"In-app purchases",additionalInfoLanguageSupport:()=>"Language support",additionalInfoLanguageSupportShowAll:()=>"Show all languages",additionalInfoAppPermissions:()=>"App permissions",additionalInfoThisAppCan:()=>"This app can",additionalInfoThisAppCanMore:()=>"More",additionalInfoThisAppCanLess:()=>"Less",additionalInfoThisAppCanMoreExpand:()=>"More app permissions",additionalInfoThisAppCanMoreExpanded:()=>"Showing more app permissions",additionalInfoPermissionsLink:()=>"Permissions info",additionalInfoPublisherInfo:()=>"Publisher info",additionalInfoSupportFormat:e=>e[0]+" support",additionalInfoInAppPurchasePriceRangeFormat:e=>e[0]+" to "+e[1],additionalInfoSeizureWarnings:()=>"Seizure warnings",additionalInfoSeizureWarningsLink:()=>"Photosensitive seizure warning",additionalInfoTargetedOfferDisclaimerTitle:()=>"Offer details",additionalInfoTargetedOfferDisclaimerText:()=>"Offer available to you for a limited time only. Discount based on factors such as subscription, usage or purchase behavior. Prices subject to change without notice. Limit to one per customer.",gameSizeFormat:e=>e[0]+" "+e[1],bytesSymbol:()=>"B",kiloBytesSymbol:()=>"KB",megaBytesSymbol:()=>"MB",gigaBytesSymbol:()=>"GB",teraBytesSymbol:()=>"TB",petaBytesSymbol:()=>"PB",freePriceWithAfterTextAccessibilityTemplate:e=>"Original price "+e[0]+", free "+e[1],editionSelectorButtonText:()=>"CHOOSE EDITION",editionListItemAccessibilityLabelTemplate:e=>e[0]+", "+e[1]+" of "+e[2]+" editions",tabAccessibilityLabelFormat:e=>e[0]+" tab, "+e[1]+" of "+e[2],openCartButtonAccessibilityLabel:()=>"Open cart",channelTitle_InThisBundle:()=>"In this bundle",channelTitle_WorksWith:()=>"Works with",seeAllButtonText:()=>"SEE ALL",installButtonText:()=>"INSTALL TO",youOwnThisText:()=>"You own this",freeTrial:()=>"Free trial",freeTrialUpsellFormat:e=>"Free trial with "+e[0],installScreenCancelButtonText:()=>"CANCEL",installScreenInstallButtonText:()=>"INSTALL NOW",installScreenLaunchButtonText:()=>"LAUNCH",installScreenReadyToInstall:()=>"Ready to install",installScreenConsoleStateOn:()=>"Console on",installScreenConsoleStateOff:()=>"Console off",installScreenConsoleStateUnknown:()=>"Console state unknown",installScreenConsoleTabText:()=>"CONSOLE",installScreenPcTabText:()=>"PC",installScreenPcTabHeading:()=>"Install this content with the Xbox app",installScreenPcAppUpsellText:()=>"Discover and download new games with Xbox Game Pass, see what your friends are playing and chat with them across PC, mobile, and Xbox console.",installScreenPcAppRequiresText:()=>"Requires Windows 10 (latest update) or higher and the Xbox app to play PC games.",installScreenEmptyConsoleTabHeading:()=>"Install this content to an Xbox console",installScreenEmptyConsoleUpsellText:()=>"When you're away from your console or your Windows 10 device, you can still get ready to play your next Xbox console game",installScreenEmptyConsoleInstructionsText:()=>"Here's how to get your console and Windows 10 device ready for installations you'll be able to start from your phone or mobile device.",installScreenFreeStorageTemplate:e=>e[0]+" free of "+e[1],installStatusErrorMessage:()=>"Install error. Please try again.",installStatusPendingCaption:()=>"Waiting for",installStatusSuccessCaption:()=>"Queued",installStatusErrorTitle:()=>"INSTALL ERROR",installStatusErrorSubtitle:()=>"Please try again",installStatusPendingTitle:()=>"WAITING FOR",installStatusSuccessTitle:()=>"QUEUED",installErrorDetailsHeading:()=>"Something unexpected happened",installErrorDetailsMessage:()=>"You can wait a bit and try again.",installRetryButtonText:()=>"RETRY",installErrorButtonAccessibilityLabel:()=>"An install error has occurred. Press for details",goToGameText:()=>"GO TO GAME",goToGameButtonAccessibilityLabelFormat:e=>"Go to game - "+e[0],returnToTopText:()=>"RETURN TO TOP",addOnsIncludedSectionTitle:()=>"Add-ons included",gamesIncludedSectionTitle:()=>"Games included",channelTitle_CompareEditions:()=>"Compare editions",thisEditionBadgeText:()=>"THIS EDITION",giftActionText:()=>"Buy as gift",giftActionAccessibilityLabelFormat:e=>"Buy "+e[0]+" as a gift",giftActionAccessibilityLabelWithPriceFormat:e=>"Buy "+e[0]+" as a gift for "+e[1],languagesSupportedTitle:()=>"Languages Supported",languageHeader:()=>"LANGUAGE",interfaceHeader:()=>"INTERFACE",audioHeader:()=>"AUDIO",subtitlesHeader:()=>"SUBTITLES",viewAllText:()=>"VIEW ALL",viewLessText:()=>"VIEW LESS",languageFeatureSupportedTemplate:e=>e[0]+" in "+e[1]+" supported",languageFeatureNotSupportedTemplate:e=>e[0]+" in "+e[1]+" not supported",cloudPlayButtonText:()=>"Play with cloud gaming",cloudPlayButtonAccessibilityLabelFormat:e=>"Play "+e[0]+" with cloud gaming",monthWithPluralizationFormatRules:e=>"[[1]"+e[0]+" month][[*]"+e[0]+" months]",monthCount:e=>Object(a.b)(e.months,0,o.f,{one:"1 month",other:e.months+" months"}),dayWithPluralizationFormatRules:e=>"[[1]"+e[0]+" day][[*]"+e[0]+" days]",dayCount:e=>Object(a.b)(e.days,0,o.f,{one:"1 day",other:e.days+" days"}),hourWithPluralizationFormatRules:e=>"[[1]"+e[0]+" hour][[*]"+e[0]+" hours]",hourCount:e=>Object(a.b)(e.hours,0,o.f,{one:"1 hour",other:e.hours+" hours"}),minuteWithPluralizationFormatRules:e=>"[[1]"+e[0]+" minute][[*]"+e[0]+" minutes]",minuteCount:e=>Object(a.b)(e.minutes,0,o.f,{one:"1 minute",other:e.minutes+" minutes"}),promoFreeDayWithPluralizationFormatRules:e=>"[[1]"+e[0]+" day free][[*]"+e[0]+" days free]",promoFreeDayCount:e=>Object(a.b)(e.days,0,o.f,{one:"1 day free",other:e.days+" days free"}),promoFreeMonthWithPluralizationFormatRules:e=>"[[1]"+e[0]+" month free][[*]"+e[0]+" months free]",promoFreeMonthCount:e=>Object(a.b)(e.months,0,o.f,{one:"1 month free",other:e.months+" months free"}),promoFreeYearWithPluralizationFormatRules:e=>"[[1]"+e[0]+" year free][[*]"+e[0]+" years free]",promoFreeYearCount:e=>Object(a.b)(e.years,0,o.f,{one:"1 year free",other:e.years+" years free"}),plusSignDelimiterStringTemplate:e=>e[0]+" + "+e[1],channelTitle_CompareSubscriptionEditions:()=>"Choose the plan that's right for you",bestDealBadgeText:()=>"BEST DEAL",gamePassUltimateUnlimitedAccessText:()=>"Unlimited access to over 100 high-quality games across PC, console, and mobile devices",gamePassNewGamesAddedText:()=>"New games added all the time",gamePassXboxGameStudiosText:e=>e[0]+" titles the day they release",gamePassMemberDiscountsText:()=>"Member discounts and deals",gamePassPerksText:()=>"Free Perks including in-game content and partner offers",gamePassUltimateCloudGamingText:()=>"Play games on your mobile phone and tablet from the cloud",alsoIncludesText:()=>"ALSO INCLUDES",gamePassUltimateXboxLiveGoldText:e=>e[0]+" includes "+e[1]+", "+e[2]+", and console multiplayer",gamePassUltimateEaPlayText:()=>"A library of top Electronic Arts titles, exclusive rewards, and member-only content",gamePassPcEaPlayText:()=>"A library of top Electronic Arts titles, exclusive rewards, and member-only content on PC",joinNowText:()=>"JOIN NOW",joinNowButtonAccessibilityLabelFormat:e=>"Join "+e[0]+" now",gamePassSubscriptionText:e=>e[0]+" for "+e[1],gamePassPcUnlimitedAccessText:()=>"Unlimited access to over 100 high-quality games on PC",xboxGamePassUnlimitedAccessText:()=>"Unlimited access to over 100 high-quality console games",moreOptionsMenuTitle:()=>"More options",playableOnPCDeviceName:()=>"PC",playableOnMobileDeviceName:()=>"Mobile",targetedOfferBuyBoxTooltipFormat:e=>"Offer expires in "+e[0]+". See additional terms below.",targetedOfferPromoMessageFormat:e=>e[0]+"% off "+e[1],seeInStoreButtonText:()=>"See in store",buyInStoreButtonText:()=>"Buy in store",actionPanelOverflowButtonAccessibilityLabel:()=>"Overflow, press for more options",redeemACodeButtonLabel:()=>"Redeem a code",forText:()=>"for",thenText:()=>"then",firstMonthPriceText:e=>"Get your first month for "+e[0]+",",firstMonthAccessibilityPriceText:e=>"Get your first month for "+e[0]+", then "+e[1]+"*",recurringMonthlySubscriptionAccessibilityPriceText:e=>"Get "+e[0]+" for "+e[1]+"*",promoDurationOffer:e=>"Buy "+e[0]+" for "+e[1]+", get "+e[2]+" free",specialOffer:()=>"Special offer",promoDurationOfferRecurringPriceAfter:e=>e[0]+" after that",manageText:()=>"MANAGE",manageActionText:()=>"Manage subscription",skuSelectorSubscriptionText:()=>"Select plan",skuSelectorProductText:()=>"Select product",listItemAccessibilityLabelFormat:e=>e[0]+", "+e[1]+" of "+e[2],noAverageRating:()=>"Average Rating Not Yet Available",notEnoughReviews:()=>"There are not enough reviews to show an average rating.",filterSortButton:()=>"FILTER/SORT",filterSortReviews:()=>"Filter/Sort Reviews",starRatings:()=>"Star Ratings",starRating:()=>"Star Rating",sortBy:()=>"Sort By",confirm:()=>"CONFIRM",allRatings:()=>"All Ratings",starCount:e=>Object(a.b)(e.stars,0,o.f,{one:"1 Star",other:e.stars+" Stars"}),mostHelpful:()=>"Most Helpful",mostRecent:()=>"Most Recent",highestRated:()=>"Highest Rated",lowestRated:()=>"Lowest Rated",actionErrorMessage:()=>"Error performing action",reviewsFor:e=>"Reviews for "+e[0],addOnsFor:e=>"Add-ons for "+e[0],chooseStarRating:()=>"Choose a star rating*",requirePrompt:()=>"*Required",addHeadline:()=>"Add a headline",writeReview:()=>"Write your review",whereDidYouPlay:()=>"Where did you play?",console:()=>"Console",pc:()=>"PC",submit:()=>"SUBMIT",userReviewDisclaimer:()=>"Your reviews, ratings, and name may be posted publicly on Microsoft and/or third-party applications and websites. By submitting a rating and/or a review you agree to the Terms of Sale.",learnMoreHere:()=>"Learn more here",addReview:()=>"ADD REVIEW",ownToReview:()=>"You need to own this product to rate or review.",signInToReview:()=>"SIGN IN TO ADD A REVIEW",editReview:()=>"EDIT REVIEW",submitting:()=>"Submitting...",successfulReview:()=>"Your rating/review has been submitted successfully!",errorReview:()=>"There was an error when submitting your rating/review. Try again later.",remoteConsoleLoadErrorHeading:()=>"Error loading devices",accessibilityCapabilitiesTitle:()=>"Accessibility Features",audioTitle:()=>"Audio",gameplayTitle:()=>"Gameplay",inputTitle:()=>"Input",visualTitle:()=>"Visual",accessibilitySiteLinkTemplate:e=>e[0]+" accessibility site",gamingAccessibilityLogoAltText:()=>"Gaming accessibility logo",viewAddOn:()=>"View add-on",viewGame:()=>"View game",skuProductTitleTemplate:e=>e[0]+" \u2014 "+e[1],noReviewsCardText:()=>"Be the first to rate and review this product!",loadMore:()=>"LOAD MORE",containsSpamOrAdvertising:()=>"Contains spam or advertising",containsProfanity:()=>"Contains profanity",containsOffensiveContent:()=>"Contains offensive content",reportReview:()=>"Report review",reportThisProduct:()=>"Report this product",signInToReport:()=>"Sign in to report this app to Microsoft",reportProductToMicrosoft:()=>"Report this product to Microsoft",reportPotentialViolation:()=>"Potential violation",reportSelectAReason:()=>"Select a reason",reportReasonOffensiveContent:()=>"Offensive content",reportReasonChildExploitation:()=>"Child exploitation",reportReasonMalwareOrVirus:()=>"Malware or virus",reportReasonPrivacyConcerns:()=>"Privacy concerns",reportReasonMisleadingApp:()=>"Misleading app",reportReasonPoorPerformance:()=>"Poor performance",reportExplanationTextHeader:()=>"How you found the violation and any other useful information",reportExplanationTextPlaceholder:()=>"Your brief response goes here",reportSuccessfullySubmitted:()=>"Successfully submitted!",reportSubmittedThankYouBody:()=>"Thanks so much for taking the time to submit your report.",reportSubmittedActionBody:()=>"We will begin our investigation and take action if appropriate.",lockedContentText:()=>"This content is locked",monthText:()=>"Month",dayText:()=>"Day",yearText:()=>"Year",enterDateOfBirthText:()=>"Enter your date of birth",youMayNotAccessThisText:()=>"You may not access this content.",moreAboutThisAppsPermissions:()=>"More information about this app's permissions",lessAboutThisAppsPermissions:()=>"Less information about this app's permissions",showMore:()=>"Show more",showLess:()=>"Show less",starRatingLabel:e=>"Rating of "+e[0]+" stars",notSoldSeparatelyActionText:()=>"Not available separately",bundleNotAvailableActionText:()=>"Bundle is not available",rateStars:e=>"Star rating of "+e[0],errorLoadingReviewsTitle:()=>"Error loading reviews",errorLoadingRatingsTitle:()=>"Error loading ratings",loadingRatingsAndReviewsActionsButton:()=>"Loading ratings and reviews actions button",minimumRequirementsHeading:()=>"Minimum requirements",recommendedRequirementsHeading:()=>"Recommended requirements",accessibilityFeaturesProductTag:e=>e[0]+" Accessibility features",noCaptionAvailableAltText:()=>"no caption available",responseAdded:()=>"RESPONSE ADDED",publisherResponseSuffixText:e=>e[0]+"'s response",helpfulnessVotePositive:()=>"Vote if this review was helpful",helpfulnessVoteNegative:()=>"Vote if this review was not helpful",anonymousUser:()=>"Anonymous user",buyCtaProductTitleTemplate:e=>"Buy "+e[0],getCtaProductTitleTemplate:e=>"Get "+e[0],supportedLanguagesProductTag:e=>e[0]+" Supported languages",nextActionText:()=>"Next",savingsPercentageOnSubscription:e=>e[0]+"% savings",userProgressOnAchievementTemplate:e=>e[0]+"%",achievementUnlockPercentageTemplate:e=>e[0]+"% of players have unlocked this",achievementsPossibleRewards:()=>"Possible Rewards",userAchievementProgress:()=>"Your progress",valueOutOfAmountTemplate:e=>e[0]+"/"+e[1],publishedByTemplate:e=>"Published by "+e[0],optimizedForGen9:()=>"Optimized for Xbox Series X|S",smartDelivery:()=>"Smart Delivery",newRelease:()=>"New",requiresGame:()=>"Requires a game",secretWordInTitleTemplate:e=>"(Secret) "+e[0],secretCardDescription:()=>"Keep playing to unlock this secret achievement",secretCardTitle:()=>"Secret achievement",hiddenAchievementScore:()=>"--",revealButtonLabel:()=>"REVEAL",openInStoreButtonLabel:()=>"Show in store",dealsAndSpecialsHomePageQuickLinksLabel:()=>"Deals and Specials",trendingGamesHomePageQuickLinksLabel:()=>"Trending games",topRatedGamesHomePageQuickLinksLabel:()=>"Top rated games",gamePassHomePageQuickLinksLabel:()=>"Game Pass",myWishlistHomePageQuickLinksLabel:()=>"My Wishlist",browseAllGamesHomePageQuickLinksLabel:()=>"Browse all games",quickLinksAccessibilityLabelFunction:e=>"Press to browse "+e[0],homePageChannelShowAllLabel:()=>"Show all",homePageBecauseYouLikeXFunction:e=>"Because you like "+e[0],homePageBrowseAllGamesModuleTitle:()=>"Browse all games",homePageBrowseAllGamesModuleSubTitle:()=>"Looking for more?",homePageBrowseAllGamesImageAltText:()=>"Abstract illustration of game disks and house plant",homePageBrowseAllGamesButtonLabel:()=>"Browse all games",homePageBrowseAllGamesConsoleButtonLabel:()=>"Browse all console games",homePageBrowseAllGamesPCButtonLabel:()=>"Browse all PC games",browseAllGamesPageTitleFunction:e=>Object(a.b)(e.games,0,o.f,{one:"Browse all games (1 game)",other:"Browse all games ("+Object(a.a)("en",e.games,0)+" games)"}),homePageBrowseAllConsoleGamesPageTitleFunction:e=>"Browse all console games ("+e[0]+" games)",homePageBrowseAllPCGamesPageTitleFunction:e=>"Browse all PC games ("+e[0]+" games)",browsePageAppliedFilterAccessibilityLabel:()=>"Press to deselect this filter",browsePageFiltersTitle:()=>"Refine game results",mobileBrowsePageFiltersButtonLabelFunction:e=>"[[1]Refine game results ("+e[0]+" filter applied)][[*]Refine game results ("+e[0]+" filters applied)]",browsePageSortByXFunction:e=>"Sort by "+e[0],browsePageFilterByXFunction:e=>"Filter by "+e[0],browsePageFilterGroupCollapsedAccLabel:()=>"Press to expand",browsePageFilterGroupExpandedAccLabel:()=>"Press to collapse",browsePageClearAllFilters:()=>"CLEAR ALL FILTERS",browsePageClearAllFiltersAccessibilityLabel:()=>"clear all filters",browsePageClearFilterFunction:e=>"clear filter "+e[0],browsePageFilterTitle:()=>"Filter",browsePageFilterMobileTitleFunction:e=>Object(a.b)(e.Filters,0,o.f,{one:"(1) Filter applied",other:"("+Object(a.a)("en",e.Filters,0)+") Filters applied"}),browsePageSeeResultsFunction:e=>"See ("+e[0]+") results",browsePageRefineResults:()=>"Refine results",browsePageFilterErrorTitle:()=>"Oops...",browsePageFilterErrorDescription:()=>"We are unable to get any filter or sort options at the moment.",unlockedAchievementTemplate:e=>"Unlocked "+e[0],scrollToTopButtonAccessibilityLabel:()=>"Scroll to top",achievementsHeader:()=>"Achievements",gamePassUltimateText:()=>"Everyone can enjoy all the benefits of Ultimate",ultimateFamilyShareBenefit:()=>"Ultimate benefits shared among 5 friends and family",ultimateFamilyIncludeBenefit:()=>"Include friends and family outside your household",ultimateFamilyOwnAccountBenefit:()=>"Every player uses their own account",ultimateFamilyOwnHistoryBenefit:()=>"Each account gets their own history, achievements, gamertag and saves",ultimateFamilyPlayBenefit:()=>"Play at the same time on console & PC",backCallToAction:()=>"Back",ultimateFamilyEnjoyBenefit:()=>"Enjoy hundreds of games together",sorryForTheInconvenience:()=>"Sorry for the inconvenience",externallyManagedSubscription:e=>"It appears that you did not purchase your "+e[0]+" subscription here. Please go the place where you initially paid for your subscription to manage it there.",offerNotValid:()=>"Sorry, this offer is not valid.",gameNameHeroArtAccessibilityLabelTemplate:e=>e[1]+" hero art",searchTitle:e=>Object(a.b)(e.count,0,o.f,{one:"1 Search Result for: "+e.queryParam,other:Object(a.a)("en",e.count,0)+" Search Results for: "+e.queryParam}),paginationComponentPreviousButtonLabel:()=>"Previous",paginationComponentNextButtonLabel:()=>"Next",paginationComponentAccessibilityLabel:e=>"Navigate to page "+e.pageNumber,gamesTabTitle:e=>"Games ("+e[0]+")",addOnsTabTitle:e=>"Add-Ons ("+e[0]+")",hardwareTabTitle:e=>"Hardware ("+e[0]+")",supportTabTitle:e=>"Support ("+e[0]+")",otherTabTitle:e=>"Other ("+e[0]+")",paginationDropDownParentButtonLabel:e=>e.pageSize+" results per page",errorComponentDefaultHeading:()=>"Something went wrong",errorComponentDefaultDescription:()=>"We are unable to retrieve results right now",errorComponentImageAltText:()=>"error loading results",errorComponentDefaultRetryButtonText:()=>"Try again",emptyResultsProductGridTitle:()=>"Try adjusting your filters",emptyResultsProductGridSubtitle:()=>"Sorry looks like we have nothing here.",subscriptionsTabTitleFormat:e=>"Subscriptions ("+e[0]+")",sortAndFilterNotAvailable:()=>"Sort & filter is not available for this category"}}}]);
//# sourceMappingURL=strings-resjson.71b2bb26.chunk.js.map