﻿define(
({
		viewer: {
			loading: {
				step1: "טעינת אפליקציה",
				step2: "טעינת מידע",
				step3: "אתחול הסיור",
				loadBuilder: "החלפה למצב בניה",
				redirectSignIn: "הפניה לדף ההתחברות",
				redirectSignIn2: "(תופנה מחדש לאחר ההתחברות)",
				fail: "סליחה, טעינת מפת סיור נכשלה",
				failButton: "נסה שוב"
			},
			errors: {
				boxTitle: "אירעה שגיאה",
				portalSelf: "שגיאה חמורה: נכשל ניסיון לקבל תצורת פורטל",
				invalidConfig: "שגיאה קריטית: קביעת תצורה לא תקינה",
				invalidConfigOwner: "שגיאה קריטית: קביעת תצורה לא תקינה (חייב להיות בעלים מוכרים)",
				invalidConfigNoWebmap: "שגיאה קריטית: קביעת תצורה לא תקינה (web map או מזהה אפליקציה לא צויינו ב index.html)",
				createMap: "לא ניתן ליצור מפה",
				invalidApp: "שגיאה קריטית: לא ניתן לטעון את האפליקציה",
				noLayer: "ה- web map לא מכיל שכבת מידע תקינה עבור מפת סיור",
				noLayerMobile: "ברוכים הבאים לאפליקצית web מסוג מפת סיור. לא נקבעה תצורה לאפליקציה. כלי בניית מפת הסיור לא נתמך במכשיריים ניידים.",
				noLayerView: "ברוכים הבאים לאפליקצית ה- web של מפת הסיור.<br />טרם נקבעה תצורה לאפליקציה.",
				appSave: "שגיאה בשמירת אפליקצית ה- web",
				mapSave: "שגיאה בשמירת ה- web map",
				featureServiceLoad: "שגיאה בטעינת שירות ישויות",
				notAuthorized: "אינך מורשה לגשת לאפליקציה זו",
				oldBrowserTitle: "אין תמיכה מלאה בדפדפן",
				noBuilderIE8: "כלי בניית הסיור הממופה לא נתמך ב- Internet Explorer טרם גרסה 9.",
				ie10Win7Explain: "כלי הבניה האינטראקטיבי של מפת הסיור לא נתמך ב- Internet Explorer 10 על Windows 7 אם מקור הנתונים הוא שירות ישויות עם קישורים. כדי להשתמש בשירות  ישויות עם קישורים <a target='_blank' href='http://msdn.microsoft.com/en-us/library/ie/hh920756(v=vs.85).aspx'>  עליך לשנות ידנית את סטטוס המסמך לסטטוס סטנדרטי של Internet Explorer 9 </a>, <a target='_blank'  href='http://news.softpedia.com/news/How-to-Remove-IE10-and-Get-Back-to-IE9-on-Windows-7-308998.shtml'>  לשנמך לגרסת Internet Explorer 9</a> או, לשדרג למערכת הפעלה Windows 8.",
				oldBrowserExplain: "דפדפן זה לא תומך ביצירת תמונה ממוזערת אוטומטית מתוך התמונות שטענת למפת הסיור. באפשרותך ליצור מפת סיור על ידי דפדפן זה, אך תצטרך לספק תמונה ממוזערת בנפרד לכל אחת מהתמונות שתעלה.",
				oldBrowserExplain2: "בכדי לשפר את ההתנסות שלך, <a href='http://browsehappy.com/' target='_blank'>שדרג את הדפדפן שלך</a>או  <a href='http://www.google.com/chromeframe/?redirect=true' target='_blank'>הפעל Google Chrome Frame for Internet Explorer</a>.",
				oldBrowserExplain3: "כלי בניית מפת הסיור לא עובד עם אינטרנט אקספלורר 10 על Windows XP.",
				oldBrowserClose: "סגור"
			},
			mobileHTML: {
				showIntro: "הצג כותרת",
				hideIntro: "הסתר כותרת",
				navList: "רשימה",
				navMap: "מפה",
				navInfo: "מדיה",
				introStartBtn: "התחלה"
			},
			desktopHTML: {
				storymapsText: "מפת סיפור",
				builderButton: "עבור למצב בנייה",
				bitlyTooltip: "קבל קישור קצר לאפליקציה",
				bitlyStartIndex: "קישור למקום נוכחי"
			},
			builderHTML: {
				panelHeader: "קביעת תצורת אפליקציה",
				buttonSave: "שמירה",
				buttonSettings: "הגדרות",
				buttonShare: "שתף",
				buttonView: "מצב צפיה",
				buttonItem: "פתח פריט של אפליקצית web",
				buttonHelp: "עזרה",
				buttonOrganize: "ארגן",
				buttonAdd: "הוספה",
				buttonImport: "ייבא",
				buttonImportDisabled: "ייבוא לא אפשרי כאשר משתמשים בשירות ישויות עם קישורים",
				dataEditionDisabled: "גרסת הנתונים אינה פעילה במקור נתוני CSV",
				dataSourceWarning: "נתוני שכבת מפת הסיור השתנו. אם מזהה הישויות שונה, אתה צריך לאפס את הסדר וכן נקודות נסתרות דרך <b>ארגן</b>. אם שמות השדות שונו, אתה צריך לאפס את הגדרות השדות תחת <b>לשונית נתונים בהגדרות</b>.",
				organizeWarning: "נקודה אחת או מספר נקודות שנוספו מחוץ לאשף הבנייה האינטראקטיבי מוסתרות.",
				dataPicError0a: "סיור זה כולל <b>%NB%</b> כתובות URL לא תקינות של תמונות.",
				dataPicError0b: "יכול להיות שסיור זה כולל <b>%NB%</b> כתובות URL לא תקינות של תמונות.",
				dataPicError1: "סיור ממופה דורש שסיומות כתובות URL יהיו מהסוגים הבאים: jp(e)g, .png, .gif או .bmp",
				dataPicError2: "דרישה זו לא תשפיע על הסיור הממופה שכבר פרסמת. יחד עם זאת, בכדי להשתמש בכלי הבניה האינטראקטיבי, עליך תחילה לטפל בנושא כתובת ה- URL על ידי ביצוע אחת משתי הפעולות שלהלן:",
				dataPicError3: "ערוך כתובות URL",
				dataPicError4: "פעולה זו תוסיף <i>#isImage</i> לסיומת של כתובות URL לא נתמכות של תמונות. רוב השרתים תומכים בתוספי URL. יחד עם זאת, ברגע שתבצע פעולה זו, עליך לודא שכתובות ה- URL המעודכנות של התמונות פעילות על ידי ניווט באמצעות הנקודות שלך. באם כל התמונות נטענות, ניתן כעת לשמור את הסיור הממופה שלך. אם <b>התמונות נטענות בצורה לא תקינה, אל תשמור את הסיור הממופה<b>. במקום זאת, טען מחדש את כלי הבניה ובצע את הפעולה השניה.",
				dataPicError5: "הגבל את הסיור לתמונות",
				dataPicError6: "פעולה זו גרמה לכל כתובות ה- URL להיחשב כתמונות, אך לא תוכל להוסיף סרטונים באמצעות כלי הבניה האינטראקטיבי. פעולה זו הפיכה, במידה ותחליט להוסיף סרטון בעתיד.",
				dataPicError7: "הסיור הממופה שלך הוגבל לתמונות, לא ניתן לטעון סרטונים. במידה ותבחר להסיר את ההגבלה הזו, בדוק שהתמונות שלך עדיין נטענות בצורה תקינה לפני שמירת הסיור הממופה. תוכל להחזיר מגבלה זו במידת הצורת ובאם תבחר בכך.",
				dataPicError8: "הסר הגבלת תמונה",
				dataPicError9: "אם כתובות ה- URL הללו מפנות לסרטונים, התעלם מאזהרה זו, אם הן מפנות לתמונות עליך לבצע אחת משתי הפעולות שלהלן:",
				modalCancel: "ביטול",
				modalApply: "בצע",
				organizeHeader: "ארגן את מאפייני הסיור",
				organizeGeneralCaption: "השתמש ביכולת גרירה ומיקום בכדי למיין את נקודות הסיור",
				organizeDelete: "מחק",
				organizeHide: "הסתר",
				organizeReset: "אפס סדר ונקודות נסתרות",
				addMaxPointReached: "הגעת למספר המקסימלי של נקודות מורשות על ידי סט האייקונים ולא ניתן להוסיף עוד נקודת סיור.<br /><br />שים לב שאם תבחר למחוק נקודות קיימות, תיאלץ לטעון את האפליקציה שוב.",
				addMaxPointReachedMobile: "סליחה, הגעת למספר המקסימלי של נקודות מורשות ואינך יכול להוסיף תמונה זו.",
				addClose: "סגור",
				addHeader: "הוסף נקודת סיור חדשה",
				addTabPicture: "מדיה",
				addTabInformation: "מידע",
				addTabLocation: "מיקום",
				addSelectCaption: "בחר או גרור תמונה",
				addNoteVideo: "הסתכל בעזרה להנחיות שימוש בסרטונים",		
				addSelectCaptionNoFileReader: "בחר תמונה",	
				addChangePhoto: "שנה תמונה ותמונה ממוזערת",
				addPictureResolutionIntro: "רזולוצית התמונה גבוהה מהנדרש:",
				addPictureResolutionOldBrowser: "רזולוצית התמונה גבוהה מהנדרש. ניתן למקסם את חווית מפת הסיור על ידי הגדרת רזולוציה נמוכה יותר מה- %RECOMMENDED_RES%.",
				addPictureResolutionResize: "שנה את רזולוצית התמונה ל-  %RESOLUTION%",
				addPictureResolutionKeep: "שמור על הרזולוציה המקורית של ה-  %RESOLUTION%",
				addSelectThumbnail: "בחר תמונה ממוזערת",
				addNoThumbSelected: "לא נבחרה תמונה ממוזערת",
				addThumbSelected: "נבחר",
				addCameraSettingsHeader: "הגדרות מצלמה",
				addThumbnailHeader: "תמונה ממוזערת",
				addLabelPicUrl: "תמונה",
				addLabelThumbUrl: "תמונה ממוזערת",
				addTextPlaceholderUrl: "הכנס URL של תמונה",
				addTextPlaceholderUrl2: "הכנס URL של דף Youtube",
				addTextPlaceholderUrl3: "הכנס URL של דף וידאו",
				addTextPlaceholderUrl4: "הכנס URL של דף וידאו מוטמע",
				addLabelVideo: "וידאו",
				addMediaVideoOther: "אחר",
				addMediaVideoHelp: "בדוק את ה URL וקבל את ברירת המחדל של התמונה הממוזערת",
				addMediaVideoHelpTooltip1: "הבדיקה הצליחה",
				addMediaVideoHelpTooltip2: "הבדיקה נכשלה",
				addMediaVideoHelpTooltip4: "מצא את האפשרות להטביע את הווידאו ולהעתיק את URL  של הוידאו שקיים בקוד",
				addLabelName: "שם",
				addLabelDescription: "תיאור",
				addTextPlaceholder: "הקלד משהו",
				addLocatePlaceholder: "אתר כתובת או מקום",
				addPinColor: "צבע",
				addLatitude: "קו רוחב",
				addLongitude: "קו אורך",
				addLatitudePlaceholder: "לדוגמה 34.056",
				addLongitudePlaceholder: "לדוגמה - 117.195",
				addUploading: "טוען נקודות סיור",
				addSave: "הוסף נקודת סיור",
				addMobileUploading: "טוען תמונה",
				addMobileName: "הכנס שם",
				addMobileNameMandatory: "שגיאה, אנא הכנס שם.",
				addMobileError: "סליחה, אך משהו השתבש",
				settingsHeader: "הגדרות אפליקציה",
				settingsTabLayout: "תצוגה",
				settingsTabColor: "צבעים",
				settingsTabLogo: "כותרת עליונה",
				settingsTabFields: "מידע",
				settingsTabExtent: "תיחום",
				settingsTabZoom: "רמת התמקדות",
				settingsLayoutExplain: "בחר את תצוגת האפליקציה שאתה רוצה.",
				settingsLayoutProfessional: "תצוגה בעלת שלושה פנלים",
				settingsLayoutModern: "תצוגה משולבת",
				settingsLayoutSelected: "תצוגה נבחרת",
				settingsLayoutSelect: "בחר תצוגה זו",
				settingsLayoutNote: "שים לב כי בנקןדות עם קטעי וידאו הכותרת תהיה תמיד ממוקמת מתחת לוידאו, גם אם האפשרות הזו אינה מסומנת.",
				settingsLayoutLocBtn: "הצג כפתור \'איתור\'",
				settingsLayoutLocBtnHelp: "פונקציונליות זו נתמכת ברוב המכשירים הניידים ובדפדפנים השולחניים (Internet Explorer 9).",
				settingsColorExplain: "שנה ניראות על ידי בחירת נושא מוגדר מראש או צור מראה משלך.",
				settingsLabelColor: "צבעים של כותרת עליונה, תוכן וכותרת תחתונה",
				settingsLogoExplain: "התאם את הלוגו של הכותרת העליונה (המקסימום הוא 250 x 50 פיקסלים)",
				settingsLogoEsri: "לוגו של Esri",
				settingsLogoNone: "אין לוגו",
				settingsLogoCustom: "לוגו מותאם",
				settingsLogoCustomPlaceholder: "URL של תמונה",
				settingsLogoCustomTargetPlaceholder: "קישור זמין",
				settingsLogoSocialExplain: "התאם הלינק בצד ימין עליון של הכותרת העליונה",
				settingsLogoSocialText: "טקסט",
				settingsLogoSocialLink: "קישור",
				settingsLogoSocialDisabled: "תכונה זו הוגדרה כלא זמינה על ידי המנהל",
				settingsDataFieldsExplain: "בחר שם תמונה, תיאור ושדות צבע",
				settingsDataFieldsError: "האפליקציה לא יכולה לקבוע את השם הנכון, התיאור ונתוני הצבע. אנא בחר את השדות הרלוונטיים כאן. ניתן לשנות הגדרות אלו בזמן מאוחר יותר",
				settingsFieldsLabelName: "שם",
				settingsFieldsLabelDescription: "תיאור",
				settingsFieldsLabelColor: "צבע",
				settingsFieldsReset: "אפס בחירת שדות",
				settingsExtentExplain: "קבע את התיחום ההתחלתי של מפת הסיור על ידי המפה האינטראקטיבית שלהלן.",
				settingsExtentExplainBottom: "התיחום אותו הגדרת ישנה את התיחום ההתחלתי של ה- web map. שים לב שהתיחום לא יהיה בשימוש אם הוא לא כולל את נקודת הסיור הראשונה. במקרה זה הסיור יפתח ממורכז בנקודה הראשונה.",
				settingsExtentDateLineError: "התיחום לא יכול להיות בין המרידיאן של קו אורך 180°",
				settingsExtentDateLineError2: "שגיאה בחישוב התיחום",
				settingsExtentDrawBtn: "שרטט תיחום חדש",
				settingsExtentModifyBtn: "ערוך את התיחום",
				settingsExtentApplyBtn: "תצוגה מקדימה על הסיור הממופה",
				settingsExtentUseMainMap: "השתמש בתיחום הסיור הממופה",
				settingsZoomExplain: "קבע התמקדות עבור נקודות הסיפור לאחר ההקדמה (אפשרי).",
				settingsLabelZoom: "קנה מידה/רמת התמקדות",
				settingsZoomFirstValue: "ללא",
				settingsFieldError: "אנא בחר שדה לכל רשימה",
				dataTitle: "אירוח ArcGIS Online",
				dataExplain: "שירות הישויות יתווסף ל- web map שלך. הוא לא יהיה בשיתוף עם אף אחד, ורק אתה תוכל להוסיף, לערוך ולמחוק הרשאות.<br /><br />שים לב, אם אתה משתף את האפליקציה דרך דף הפריטים, המערכת תשאל אותך אם אתה רוצה לשתף גם את שירות הישויות. זהו צעד נדרש. אתה תישאר היחידי עם הרשאות עריכה.",
				dataNameLbl: "שם שירות",
				dataFolderListLbl: "תיקייה",
				dataFolderListFetching: "משיג תיקיות...",
				dataRootFolder: "מקור",
				dataNameError: "הכנס שם עבור שירות הישויות",
				dataFolderError: "בחר תיקייה תקינה",
				dataSrcContainsInvalidChar: "שם שירות הישויות מכיל תו אחד או יותר שאינו תקין (-, <, >, #, %, :, \", ?, &, +, /, או \).",
				dataSrvAlreadyExistsError: "כבר קיים שירות עם שם זה בתוך הארגון. אנא בחר שם אחר.",
				dataBtnSave: "צור שירות",
				dataFooterProgress: "היצירה בתהליך",
				dataFooterSucceed: "היצירה הסתיימה בהצלחה, טוען",
				dataFooterError: "היצירה נכשלה, אנא נסה שוב",
				tabError: "אנא בדוק שגיאות בכל הלשוניות",
				introRecordBtn: "הקדמה",
				introRecordActivate: "השתמש בנקודה הראשונה כהקדמה (לא מופיע בגלגלת)"
			},
			addPopupJS: {
				uploadingPicture: "טוען תמונה",
				uploadSuccess: "טעינה הסתיימה בהצלחה",
				uploadError: "שגיאה בטעינת תמונה",
				uploadError2: "שגיאה בהוספת הישות (תג HTML לא חוקי)",
				notJpg: "אנא בחר את תמונת ה- jpeg לטעינה",
				errorNoPhoto: "בחר תמונה להעלות",
				errorNoThumbnail: "בחר תמונה ממוזערת להעלות",
				errorInvalidPicUrl: "הכנס תמונה תקינה (מתחיל עם http(s)‎://, מסתיים עם jpg, png, gif או bmp). תוכל לסיים את ה- URL עם \'#\isImage' לדריסת החוק הזה.",
				errorInvalidThumbUrl: "הכנס תמונה ממוזערת תקינה (מתחיל עם http(s)://, מסתיים עם jpg, png, gif או bmp).",
				errorInvalidVideoUrl: "הכנס URL תקין של וידאו (מתחיל ב- http:// או https://)",
				errorNoName: "הכנס שם עבור נקודת סיור זו",
				errorNoDescription: "הכנס תיאור עבור נקודת סיור זו",
				errorNoLocation: "קבע את המיקום של נקודת סיור זו"
			},
			builderJS: {
				noPendingChange: "אין שינוי לא שמור",
				unSavedChangeSingular: "שינוי אחד שלא נשמר",
				unSavedChangePlural: "שינויים שלא נשמרו",
				shareStatus1: "הסיור לא נשמר",
				shareStatus2: "הסיור משותף לציבור",
				shareStatus3: "הסיור משותף לאירגון",
				shareStatus4: "הסיור לא הוגדר כמשותף",
				popoverDiscard: "האם אתה בטוח שברצונך להיפטר מכל השינויים שלא נשמרו?",
				yes: "כן",
				no: "לא",
				popoverLoseSave: "על ידי פתיחת החלון, תאבד את כל השינויים שלא נשמרו",
				ok: "אישור",
				popoverSaveWhenDone: "אל תשכח לשמור ברגע שתסיים",
				closeWithPendingChange: "האם הינך בטוח שברצונך לאשר פעולה זו? אתה עלול לאבד את השינויים שביצעת",
				gotIt: "אישור",
				savingApplication: "שמירת אפליקציה",
				saveSuccess: "שמירת אפליקציה בוצעה בהצלחה",
				saveError: "שמירה נכשלה, יש לנסות שוב",
				saveError2: "השמירה נכשלה בשל תג HTML לא חוקי בשם או בתיאור",
				saveError3: "הכותרת לא יכולה להיות ריקה",
				dragColorPicker: "הזז אותי סביב<br />או שנה את הצבע שלי",
				dataWarningExtent: "יש לך נתונים מחוץ לתיחום ה- web map. נתונים אלו לא יעובדו לכדי נקודות סיור, שנה את תיחום המפה באם ברצונך להשתמש בהם.",
				dataWarningVisibi: "שכבת מפת הסיור שלך כבויה בתיחום ה- web map הנוכחי. הדלק את שכבת מפת הסיור שלך באמצעות %MAPSIZE% מפה גדולה.",
				dataWarningEdit: "ערוך web map",
				dataWarningClose: "סגור",
				signIn: "אנא התחבר עם חשבון ב",
				signInTwo: "כדי לשמור את האפליקציה.",
				switchBM: "משנה את מפת הבסיס"
			},
			organizePopupJS: {
				messageStart: "בחרת למחוק",
				messageSinglePoint: "נקודת סיור אחת",
				messageMultiPoint: "נקודות סיור",
				messagePermantRemove: "פעולה זו תסיר באופן קבוע את",
				messageRecord: "רשומה",
				messageRecordPlural: "רשומות",
				messageConfirm: "מבסיס הנתונים שלך. האם ברצונך להמשיך?",
				labelButtonShow: "הצג",
				labelButtonHide: "הסתר"
			},
			picturePanelJS: {
				popoverDeleteWarningPicAndThumb: "זה ימחק באופן סופי את התמונה והתמונה הממוזערת",
				popoverDeleteWarningThumb: "זה ימחק באופן סופי את התמונה הממוזערת",
				popoverUploadingPhoto: "טוען תמונה ותמונה ממוזערת",
				popoverUploadingThumbnail: "טוען תמונה ממוזערת",
				popoverUploadSuccessful: "טעינה הסתיימה בהצלחה",
				popoverUploadError: "טעינה נכשלה, אנא נסה שוב",
				changePicAndThumb: "שנה תמונה",
				changeThumb: "שנה תמונה ממוזערת",
				selectPic: "שנה מדיה",
				selectThumb: "שנה תמונה ממוזערת",
				uploadPicAndThumb: "בצע"
			},
			headerJS:{
				editMe: "ערוך אותי !",
				templateTitle: "קבע כותרת תבנית",
				templateSubtitle: "קבע כותרת המשנה לתבנית"
			},
			crossFaderJS:{
				setPicture: "קבע כותרת לתמונה",
				setCaption: "הכנס תיאור תמונה"
			},
			importPopup: {
				title: "ייבא",
				prevBtn: "חזור",
				nextBtn: "הבא"
			},
			importPopupHome: {
				header: "היכן התמונות שלך מאוחסנות?"
			},
			onlinePhotoSharingCommon: {
				pictures: "תמונות",
				videos: "סרטונים",
				disabled: "תכונה זו הוגדרה כלא זמינה על ידי המנהל",
				disabledPortal: "ישות זו אינה זמינה ב- Portal for ArcGIS",
				header1: "חייב להיות שיתוף ציבורי לתמונות שלך.",
				header2: "הייבוא יוגבל ל- ‎%NB1% ‏%MEDIA% ראשונים.",
				emptyDataset: "שגיאה, לא נמצאו תמונות",
				footerImport: "ייבא",
				selectAlbum: "בחר אלבום ציבורי",
				selectAlbum2: "בחר אלבום",
				pleaseChoose: "אנא בחר",
				userLookup: "חפש",
				userLookingup: "מסתכל למעלה",
				csv: "מקושר ל- CSV",
				advanced: "אפשרויות מתקדמות",
				advancedScratchLbl: "התחל סיור חדש",
				advancedScratchTip: "צור סיור ריק אותו תוכל לאכלס באופן ידני באמצעות אשף.",
				advancedCSVLbl: "ייבא נתוני סיור מקובץ CSV",
				advancedCSVTip: "ייבא את תוכן הסיור שלך מקובץ CSV.",
				advancedCommonTip: "זה דורש שהתמונות וקטעי הווידאו שלך יהיו כבר באינטרנט.",
				select: "בצע בחירה",
				locUse: "השתמש במיקום מרחבי לתמונות",
				locExplain: "ייתכן ולא תרצה להשתמש במיקום תמונות, מאחר ויכול להיות שהמידע הזה יישאב מהאלבום, כך שיווצר מצב שכל התמונות יסומנו באותו המיקום.",
				locExplain2: "יתכן ולא תרצה להשתמש במיקום סרטונים, מאחר ויכול להיות שהמידע הזה יישאב מהגדרות המשתמש, כך שיווצר מצב שכל הסרטונים יסומנו באותו המיקום."
			},
			viewFlickr: {
				title: "ייבא Flickr",
				header: "הכנס את שם משתמש שלך בפליקר ובחר סט תמונות או תגית לייבוא",
				userInputLbl: "הכנס שם משתמש",
				signInMsg2: "משתמש לא נמצא",
				selectSet: "בחר סט תמונה",
				selectTag: "או בחר תגית",
				footerImportTag: "ייבא את התגית הנבחרת",
				footerImportSet: "ייבא את הסט הנבחר"
			},
			viewFacebook: {
				title: "ייבוא מפיסבוק",
				header: "בצע אימות מול חשבון משתמש שלך בפייסבוק או השתמש בעמוד ציבורי. ניתן להשתמש באלבומים פרטיים בכדי ליצור סיור ממופה ציבורי שלא ידרוש אימות עם חשבון משתמש של פייסבוק, וזה יאפשר להשאיר הערות ולייקים כפרטיים.",
				leftHeader: "משתמש פייסבוק",
				rightHeader: "עמוד פייסבוק",
				pageExplain: "A Facebook page is a public brand/product or celebrity like <b>esrigis</b>. You can get the page name after the firstq'\/'\ in the page URL.",
				pageInputLbl: "הכנס שם עמוד",
				lookupMsgError: "עמוד לא נמצא"
			},
			viewPicasa: {
				title: "יבוא Picasa/Google+",
				header: "הכנס כתובת דואר אלקטורני או את ה- ID של חשבון שלך ב- Picasa או Google+.",
				userInputLbl: "הכנס כתובת דואר אלקטורני או ID",
				signInMsg2: "חשבון לא נמצא",
				signInMsg3: "אין אלבום ציבורי",
				howToFind: "כיצד למצוא את ה- ID של חשבון ה- Picasa או Google+",
				howToFind2: "העתק תווים בין ה \'/\'  הראשון לשני של כל עמוד Picasa או G+"
			},
			viewCSV: {
				title: "ייבוא CSV",
				uploadBtn: "בחר או גרור קובץ CSV",
				resultHeaderEmpty: "קובץ ה- CSV ריק",
				resultHeaderSuccess: "%NB_POINTS% נקודות נטענו בהצלחה",
				resultHasBeenLimited: "הייבוא הוגבל ל- %VAL1% הנקודות הראשונות מתוך %VAL2% בכדי לשקף את ההגבלה של %VAL3% נקודות לכל סיור",
				browserSupport: "הדפדפן שלך לא נתמך, בכדי להשתמש ב- CSV עליך לשדרג <a href='http://browsehappy.com/' target='_blank'>את הדפדפן שלך</a> או להשתמש בצפיין ArcGIS.com web map (ראה עזרה).",
				errorLatLng: "לא נמצאו שדות קווי אורך ורוחב. ערכים אפשרים לקו רוחב הינם: <i>%LAT%</i> ולקו אורך הינם: <i>%LONG%</i>.",
				errorFieldsExplain: "הטעינה נכשלה מאחר והשדות הנדרשים הבאים לא נמצאו",
				errorFieldsName: "<b>שם</b> ערכים אפשריים יכולים להיות: %VAL%",
				errorFieldsDesc: "<b>Description</b> ערכים אפשריים יכולים להיות: %VAL%",
				errorFieldsUrl: "<b>Picture URL</b> ערכים אפשריים יכולים להיות: %VAL%",
				errorFieldsThumb: "<b>Thumbnail URL</b> ערכים אפשריים יכולים להיות: %VAL%",
				errorFields2Explain: "הטעינה נכשלה מאחר וה- CSV לא משתמש באותם המאפיינים שבשכבה עבור המאפיינים הבאים",
				errorFields2Name: "<b>שם</b> השתמש ב- %VAL1% במקום %VAL2%",
				errorFields2Desc: "<b>תיאור</b> השתמש ב- %VAL1%  במקום %VAL2%",
				errorFields2Url: "<b>Picture URL</b> השתמש ב %VAL1% במקום %VAL2%",
				errorFields2Thumb: "<b>Thumbnail URL</b> השתמש ב %VAL1% במקום %VAL2%",
				resultFieldsAll: "כל המאפיינים עברו ייבוא",
				resultFieldsNotAll: "המאפיינים הבאים לא עברו ייבוא מפני שאינם קיימים בשכבת המפה",
				resultFieldsNotAll2: "המאפיינים הבאים עברו ייבוא",
				footerNextBtnResult: "ייבא לתוך ה- web map",
				footerProgress: "הייבוא מתבצע כעת",
				footerSucceed: "הייבוא הצליח. טוען"
			},
			viewYoutube: {
				title: "ייבא Youtube",
				header: "הכנס שם משתמש YouTube כדי לחפש סרטונים המשותפים לציבור.",
				pageInputLbl: "הזן שם משתמש Youtube",
				lookupMsgError: "משתמש לא נמצא",
				howToFind: "איך למצוא שם משתמש ב-Youtube",
				howToFind2: "שם המשתמש מוצג תחת קטעי וידאו",
				found: "נמצא",
				noData: "לא נמצאו סרטונים ציבוריים"
			},
			viewGeoTag: {
				title: "בחר ואתר התמונות/קטעי הווידאו שלך",
				header: "לחץ או הקש על התמונות שברצונך לייבא בכדי לאתר אותם.",
				headerMore: "מדוע לא אותרו מרחבית התמונות/הוידאו שלי?",
				headerExplain: "אם לתמונות יש מיקום תקין, המפה תאתר אותן אוטומטית ותרשום אותן בטאב השני.<br /><br />ברירות המחדל של Picasa ו-Flickr אינן משתמשות במיקום  המטה דטה של ה- EXIF של התמונות. בדוק את ההגדרות של Flickr/Picasa בטאב הפרטיות כדי לאפשר שימוש במידע על מיקום התמונה. יתכן ותאלץ לטעון  מחדש את התמונות לתוך Flickr/Picasa.<br /><br /> עבור פייסבוק, יש לגשת לכל תמונה, ללחוץ על עריכה ולבחור את המיקום הרצוי מבין האפשרויות  המבוססות על המטה דטה של ה-EXIF של התמונה.",
				leftPanelTab1: "בכדי לאתר",
				leftPanelTab2: "מאותר",
				clickOrTap: "לחץ או הקש על המפה בכדי לאתר",
				clearLoc: "נקה מיקומים",
				clickDrop: "אל תייבא",
				footerImport: "ייבא",
				footerProgress: "הייבוא מתבצע כעת",
				footerSucceed: "הייבוא הצליח. טוען...",
				loading: "טוען",
				error: "ייבוא מיקום מרחבי תמונות נכשל, אין התייחסות למיקומים מרחביים."
			},
			initPopup: {
				title: "ברוכים הבאים לאשף בניית הסיור הממופה",
				prevBtn: "חזור",
				nextBtn: "הבא"
			},
			initPopupHome: {
				header1: "היכן התמונות או הסרטונים שלך?",
				header2: "כלי הסיוע יעזור לך לבנות סיור ממופה מתוך המדיה שכבר מאוחסנת בצורה מקוונת או שהוא ייבא אותם להחשבון הארגוני של ה- ArcGIS Online שלך.",
				title1: "הם כבר ברשת",
				title2: "אני צריך להעלות את התמונות שלי",
				hostedFSTooltip: "השתמש ב-ArcGIS Online לארוח התמונות שלך (אינו תומך בוידאו).",
				hostedFsNA: "זמין רק עבור ArcGIS למפרסמים ארגוניים ומשתמשים בדרגת מנהלים",
				footer1: "כשתסיים, אל תשכח לשתף את הסיור הממופה שלך עם הקהל שלך באמצעות עמוד פריט אפליקציה",
				footer3: "הורד את תבנית קובץ ה- CSV",
				footer4: "\"שמור בשם\" אם זה לא ירד",
				footer4bis: "השתמש בקליק ימני וגם \"שמירה בשם\" אם ההורדה לא מתחילה",
				footer5: "מידע נוסף",
				footerProgress: "היצירה בתהליך",
				footerSucceed: "יצירה עברה בהצלחה. טוען..."
			},
			helpPopup: {
				title: "עזרה",
				close: "סגור",
				tab1: {
					title: "הקדמה",
					div1: "תבנית הסיור הממופה עוצבה כך שתציג מידע גיאוגרפי עבור מקומות בהם יש אלמנטי צילום או מדיה שברצונך להכלילם בסיפור אותו אתה רוצה לספר.",
					div2: "התבנית מייצרת אפליקצית אינטרנט אטרקטיבית ונוחה לשימוש, המאפשרת לך להציג סט נבחר של מקומות על ברצף ממוספר שדרכו משתמשים יכולים לדפדף. התבנית מעוצבת כך שניתן יהיה להשתמש בה בכל בכל דפדפן אינטרנט או כל מכשיר, כולל סמארטפונים וטאבלטים.  <br /><br />הנה דוגמה לסוג אפליקציה שאתה יכול ליצור:",
					div4: "<a href='http://storymaps.esri.com/stories/maptour-palmsprings' target='_blank'>סיור ממופה בפאלם ספרינגס</a>.",
					div42: "כדי לראות דוגמאות של סיורים ממופים שמשתמשים אחרים יצרו, <a href='http://links.esri.com/storymaps/map_tour_gallery' target='_blank'>בקר בגלריה</a> ב- <a href='http://storymaps.arcgis.com/' target='_blank'>אתר מפות סיפור</a>. ניתן גם לעקוב אחרינו בטוויטר ב <a href='https://twitter.com/EsriStoryMaps' target='_blank'>@EsriStoryMaps</a>.",
					div5: "נשמח לשמוע ממך! בין אם יש לך שאלה, רוצה לבקש יכולת חדשה, או חושב שמצאת באג, אנא בקר ב- <a href='http://links.esri.com/storymaps/forum' target='_blank'>פורום המשתמשים של מפות סיפור</a>."
				},
				tab2: {
					title: "מידע",
					div1: "הנושא המרכזי ששווה לשקול כאשר בונים סיור ממופה הוא בחירה היכן התמונות שלך יאוחסנו. הסיור הממופה יכול להשתמש בתמונות המאוחסנות בשירותי שיתוף תמונות גדולים, בכל שרת אינטרנט או כקישור לשירות ישויות.",
					div1a: "ראה את החלק האחרון בלשונית זו למידע אודות פורמטים נתמכים של תמונות וסרטונים.",
					div2: "כלי הבניה האינטראקטיבי נותן לך שתי אפשרויות לניהול התמונות בסיור הממופה שלך:",
					div3: "<ul><li>ניתן להשתמש <b>בתמונות מהאינטרנט </b>או מאתרי שיתוף כגון Flickr, או מתמונות המאוחסנות באתר שלך. תמונות אלו יקושרו לסיור הממופה באמצעות ה-URLs שלהם.</li><li>ניתן גם <b>לטעון תמונות מהמחשב האישי שלך </b> ישירות לסיור הממופה. אופצית טעינה זו דורשת שיהיה לך חשבון ב- ArcGIS for Organizations ושתהיינה לך הרשאות פרסום או אדמיניסטרציה, מכיוון שנוצר עבורך באופן אוטומטי שירות ישויות מתארח שבו מאוחסנות התמונות שלך כקישורים.</li></ul>",
					div4: "השימושים העיקריים הם:",
					div4b: "<b>התמונות שלך לא מאוחסנות</b>עדיין ויש לך חשבון ב- ArcGIS for Organizations: שימוש בשירות ישויות מאוחסן היא הבחירה הטובה ביותר עבורך. בדומה לשירותי שיתוף תמונות ציבורי, נוכל למקסם את התמונות שלך בכדי ליצור טעינת תמונות מהירה ולך תהיה גישה לכל יכולות ניהול הנתונים והאדמיניסטרציה של פלטפורמת ה- ArcGIS.",
					div5: "<b>אינך חלק מארגון</b>: תחילה עליך לטעון את התמונות שלך לאתר שיתוף תמונות או לשרת האינטרנט שלך. לאחר מכן כלי הבניה יסייע לך להשתמש בתמונות הללו שימשיכו להיות מאוחסנים במיקום המקורי שלהם.",
					div6: "<b>הינך מנסה להשתמש מחדש בשירות ישויות</b> המאחסן את התמונות שלך כקישורים או המתייחס לתמונות ממקור חיצוני: ראה את החלק המפורט שלהלן.",
					div7: "<b>אתה משתמש בגרסה הקודמת</b> של תבנית הסיור הממופה וכבר יש לך קובץ CSV המקשר לתמונות והתמונות הממוזערות שלך: תוכל לייבא זאת וללטש את הנתונים שלך. כלי הבניה תומך רק ב- CSV המשתמש בשדות אורך/רוחב, ניתן יהיה להשתמש בכתובת מבוססת CSV ב- web map שלך (ראה להלן).",
					div8: "מייבא מתוך שירותי שיתוף תמונות מקוונים",
					div9: "פעולת הייבוא מתייחסת לתמונות שכבר מתארחות על ידי איחסון ה- URL שלהן ב- web map feature collection. התמונות אינן מאוחסנות ב- ArcGIS Online. אם לא ניתן לגשת לתמונות מתארחות, אין לא יהיו זמינות בסיור הממופה ותתקבל הודעת 'תמונה לא זמינה'. בהסתמך על ספק השירותים, סיור ממופה עשוי שלא ליבא את השם, התיאור והמיקום של התמונות. מאפיינים אלה מאוחסנים ב- web map וכל עריכה בשירותים המקוונים לא תשתקף בסיור הממופה.",
					div10: "איחסון התמונות בשרת אינטרנט",
					div11: "באם תבחר לארח את התמונות שלך בעצמך, תתבקש ליצור באופן ידני תמונות ממוזערות עבור התמונות שלך. שימוש בתמונות ברזולוציה מלאה עבור התמונה הממוזערת יביא לתוצאה של ביצועים לא טובים. לפיכך, אנו ממליצים בחום שתשתמש בשירותי שיתופי תמונות מקוונים או שירות ישויות שיבצע זאת עבורך.",
					div12: "משתמש בשירות ישויות קיים או Shapefile",
					div13: "כל שירות ישויות נקודתי או Shapefile יכול לשמש כמקור נתוני סיור ממופה. עליך רק להוסיף את השכבה לתוך ה- web map שלך באמצעות צפיין מפה של arcgis.com. אם האפליקציה תמצא מאפיינים צפויים בשכבה שלך, כל היכולות של כלי הבניה יהיו זמינות עבורך.",
					div14: "השדות האפשריים לשמות שדות הינם (תלוי רישיות):",
					div151: "שם",
					div152: "תיאור",
					div153: "תמונה",
					div154: "תמונה ממוזערת",
					div155: "צבע ",
					div16: "אם האפליקציה לא תמצא שדות תואמים בעת שימוש בשירות ישווית, הצפיין לא יעבוד עד אשר תגדיר את תצורת השדות לשימוש באמצעות כלי הבניה. יש לכלול את כל השדות הנדרשים בקבצי CSV ושכבות Shapefile שיתווספו ל- web map באם ברצונך שכלי הבניה יעבוד.",
					div162: "בעת שימוש בשירות ישויות המאחסן את התמונות כקישורים, <b>יהיה ניתן להשתמש רק בישויות עם שני קישורים</b>. הקישור הראשון מגדיר את התמונה הראשית והקישור השני מגדיר את התמונה הממוזערת.",
					div17: "שדות התמונה והתמונה הממוזערת הינם חובה עבור שירות הישויות ללא קישורים ואופציונליים (אך ממולצים בחום) עבור שירות ישויות עם קישורים. אם יש בשירות שלך קישורים פתוחים לשימוש, כלי הבניה יאפשר לך לטעון אותם כקישורים. באם לא, תוכל רק לערוך את כתובת ה- URL של התמונה והתמונה הממוזערת.",
					div172: "אם קיים מידע בשדות התמונה והתמונה הממוזערת, תמיד יעשה בו שימוש והקישורים של שירות הישויות לא נדרשים.",
					div173: "ניתן להוריד קבצי דוגמה של shapefiles ו- CSVs מתוך",
					div18: "יצירת שירותי ישויות מתארחים מתוך shapefiles או CSV",
					div19: "כאשר אתה יוצר שירות ישויות מתארח מתוך קובץ CSV או Shapefile, הקישורים לא פתוחים לפעולה על פי הגדרת ברירת מחדל. פתח את עמוד התיאור של שירות הישויות, לחץ על החץ הקטן ליד השכבה ותראה שם את האפשרות. לאחר מכן, הסיור הממופה ימשיך להשתמש בתמונות והתמונות הממוזערות שקישרת אותם באמצעות המאפיינים. ישנה אפשרות נוספת לטעון את התמונות כשירות ישויות עם קישורים ואת זאת תוכל לבצע באמצעות שני כפתורים בפאנל התמונה (\"שנה תמונה\" ו\"שנה תמונה ממוזערת\").",
					div20: "פורמטים נתמכים של תמונות וקטעי וידאו",
					div21: "פורמטים נתמכים של תמונות הינם: <b>.jpg, .jpeg, .png, .gif ו- .bmp</b>. באם הסיומת של הקובץ שלך לא אחד מהמפורטים לעיל, הקובץ ייחשב כסרטון בסיור הממופה, למעט אם תשתמש בשירות ישויות (ראה להלן).",
					div22: "תבנית סיור ממופה זה לא כולל נגן סרטונים ועל כן עלייך להשתמש בנגן סרטונים חיצוני, המסופק על ידי שירות אירוח הסרטונים המועדף עליך (מצא את האפשרות להטמיע את הסרטון והעתק את כתובת ה- URL המופיעה בקוד המוצג). אם ברצונך לארח את הסרטון בעצמך, תוכל ליצור עמוד HTML המכילה נגן סרטונים דוגמת <a href='http://www.videojs.com/'>Video.js</a>.",
					div23: "כלי הבניה האינטראקטיבי לא מספק תיבת דו שיח להכללת סרטון בעת שימוש בשירותי ישויות עם קישורים, אך ניתן לבצע זאת על ידי עריכת המידע שלך מחוץ לכלי הבניה האינטראקטיבי. בצפיין המפה של arcgis.com, אם תשנה את שדות התמונה שיכוונו לסרטון חיצוני ותוסיף פרמטר ייחודי בסוף כתובת ה- URL שלך (#isVideo), המדיה שלך תיחשב לסרטון.",
					div24: "שים לב שעדיין תצטרך שני קישורי תמונות תקינים או שלא יהיה ניתן להשתמש בנקודה. אין אפשרות להשתמש בסרטונים כאשר משתמשים בקישורי שירות ישויות ללא שדות של תמונה ותמונה ממוזערת."
				},
				tab3: {
					title: "התאמה",
					div1: "כלי הבניה מספק מספר אפשרויות התאמה הנגישות באמצעות כפתור ההגדרות בחלק העליון של הפאנל. אם לא מצאת את האפשרות אותה הינך מחפש, אנו מספקים גם גרסה ברת הורדה שבאפשרותך לפרוס בשרת האינטרנט שלך ולשדרג אותה כך שתתאים לצרכייך.",
					div2: "אנו ממליצים שתשתמש בגרסה מתארחת למעט אם:",
					div3: "<li>לא מציע התאמת UI שאתה מעוניין בה, דוגמת שימוש בתמונת רקע לכותרת עליונה.</li><li>אתה מפתח וברצונך לשדרג את האפליקציה.</li>",
					div4: "ניתן להגדיר את הגרסה הזמינה להורדה באמצעות web map או  מזהה web mapping application. תרחישי השימוש העיקריים הם:",
					div41: "אתה בונה את הסיור הממופה שלך באמצעות אשף הבניה האינטראקטיבי בסביבה מארחת וקובע את תצורת התבנית עם מזהה אפליקציית ה- web mapping. ההגדרות אותן תקבע בעזרת אשף הבניה האינטראקטיבי ייושמו.",
					div42: "בנה את ה- web map שלך מחוץ לאשף הבנייה האינטראקטיבי והגדר את התבנית באמצעות מזהה ה- web map. עליך לקרוא את התיעוד כדי ללמוד כיצד להתאים את התבנית.",
					div43: "שים לב שכלי הבניה האינטראקטיבי זמין בגרסה מוכנה להורדה אך עם מספר מגבלות טכניות בדפדפנים דוגמת Internet Explorer בגרסאות ישנות מגרסה 10.",
					div5: "בקר ב<a href='https://github.com/Esri/map-tour-storytelling-template-js' target='_blank'>GitHub project page</a>"
				},
				tab4: {
					title: "טיפים",
					div0: "דפדפנים תומכים",
					div0a: "צפיין הסיור הממופה נתמך ב- IE8+. כלי הבניה האינטראקטיבי נתמך ב- IE9+. דברים אלו נבדקו בכל הדפדפנים המרכזיים, אך במידה ונתקלת בבעיות מסוימות, המלצתנו היא שתשתמש בדפדפן כרום.",
					div0b: "אם נתקלת בבעיות מסוימות, אנא יידע אותנו. בינתיים, על ידי בניית סיור ממופה באמצעות תבנית CSV תוכל להפחית את השימוש בממשק כלי הבניה.",
					div1: "תמונות",
					div2: "אנו ממליצים על אוריינטציה רוחבית של התמונות במקום אוריינטציה לאורך. תמונות עם יחס 4:3 מתאות ביותר. ניתן להשתמש בתמונות עם אוריינטציה לאורך, אך במסכים קטנים יותר דוגמת אייפד, חלק נכבד מהתמונות עשוי להיות מוסתר על ידי התיאור מפני שהטקסט עשוי לקחת יותר שטח כאשר הוא מוצג באזור ארוך לעומת אזור רחב. למרות שניתן להשתמש בתמונות עם גדלים ואוריינטציות שונים בסיור ממופה, אנו ממליצים להשתמש באותו גודל וצורה בדיוק עבור כל התמונות. בדרך זו, תשומת ליבו של המשתמש לא תוסט כתוצאה מגדלים שונים של תמונה כאשר הוא עוקב אחר הסיור.",
					div2a: "אנו ממליצים על גודל תמונה של 1000 פיקסלים רוחב x‏ 750 פיקסלים גובה לתמונה המרכזית ו- 140x‏93 לתמונות הממוזערות.",
					div3: "קביעת מלל התיאור באמצעות תגיות HTML",
					div4: "התיאור המילולי יכול לכלול תגיות HTML בכדי להגדיר עיצוב וקישורים, ראה <a href='http://blogs.esri.com/esri/arcgis/2013/03/29/add-links-map-tour/' target='_blank'>פוסט של הבלוג הזה</a>.",
					div4a: "כתוב כיתובית מתאימה לסיור שלך",
					div4b: "קח את הזמן כדי לכתוב כתוביות משכנעות לסיור שלך. כיתובית היא דרך טובה למשוך אנשים לסיור שלך ולספר להם את מה שיגלו בו. זה גם מקום טוב לספר לקהל שלך על המדינה בה הסיור ממוקם. לדוגמא אל תניח שאנשים יודעים איפה נמצאת העיר או העיירה שבסיור שלך. הכיתוב שלך יכול להיות מעוצב באמצעות תגי HTML, כגון קישורים. אל תכתוב כיתוביות ארוכות מידי. בחלונות דפדפן קטנים או באייפד יתכן שלא כל הטקסט יכלל ויהיה מקוטע. אם אתה לא יכול לחשוב על כיתובית טובה, כדאי להשאיר אותה ריקה.",
					div5: "שכבות תומכות",
					div6: "באפשרותך להוסיף שכבות תומכות נוספות בכדי לספק תוכן לסיור הממופה. שכבות אלו עשויות להכיל ישויות גיאוגרפיות נוספות שהמפה תציג בנוסף לנקודות הסיור הממופה, דוגמת שטחי לימוד, מסלולי הליכה או נסיעה המתחברים לנקודות הסיור הממופה שלך, וכדומה. תבנית הסיור הממופה מציגה את השכבות התומכות הללו באמצעות סימבולוגיה שאתר מגדיר ב- web map, אך החלונית הקופצת לא תהיה זמינה.",
					div7: "הקפד לשמור את הסיור שלך קצר וממצה",
					div8: "ישנה הגבלה של 99 נקודות לכל סיור. רוב הסיורים הממופים יהיו כמובן קצרים הרבה יותר מזה. אל תצפה שהקהל שלך ירצה לקפוץ בין יותר מידי נקודות סיור. יכול להיות שאתה חושב שהנושא שלך מרתק, אך אל תצפה שאחרים ירגישו כמוך!",
					div9: "בכדי ללמוד עוד, ראה <a href='https://github.com/Esri/map-tour-storytelling-template-js/raw/master/Readme.pdf' target='_blank'>במדריך המפורט הזה</a>.",
					div10: "מצב מוטמע",
					div11: "אם ברצונך להטמיע את התבנית באתר אחר באמצעות iframe, הוספת הפרמטר האופציונלי \"&embed\" בסוף ה- URL יסיר את הכותרת. ניתן לקבוע את המוד הזה בגרסה ניתנת להורדה באמצעות קובץ הגדרת התצורה.",
					div12: "על מנת למקסם את נוחות שימוש, הימנע משימוש ברוחב צר של iFrame שיכול לגורם לסיור הממופה לעבור לפריסת מסך קטן, מבוסס מגע. כאשר אתה מטמיע סיור ממופה, אנחנו תמיד ממליצים להוסיף קישור ליד הסיור המוטבע כך שמשתמשים יוכלו לפתוח את הסיור במסך מלא." 
				},
				tab5: {
					title: "פירסום",
					div1: "כאשר אתה מסיים, אל תשכח לשתף את הסיור הממופה עם הקהל שלך באמצעות כפתור שתף או באמצעות עמוד תיאור האפליקציה ב ArcGIS Online.",
					div2a: "משתף את הסיור באמצעות אשף בניית הסיור",
					div2b: "כפתור שתף יעדכן את פריטי האפליקציה ופריט ה- webmap. אם נתוני הסיור שלך מאוחסנים בפריט שירות ישויות, גם הוא יעודכן. אם הוספת שכבות אחרות באמצעות צפין מפת ArcGIS.com, אלו לא יעודכו. זה לעלול לגרום לכך שהסיור לא יהיה בשיתוף כפי לשאתה מצפה. פריטים שכבר יש להם את ההרשאות הנדרשות (או יותר) לא עודכנו.",
					div2c: "משתך את הסיור באמצעות ArcGIS Online",
					div2d: "כאשר אתה משתף את האפליקציה באמצעות ArcGIS Online, תדרש במידת הצורך לעדכן את המשאבים התלויים (web map, שירות ישויות, שכבת קישוט) שאינם משותפים באותה הדרך. אם הסיור הממופה ציבורי ואחד מהמשאבים שלך אינו משותף עם קהל היעד שלך, המשתמשים ינותבו לדף כניסת ArcGIS Online.",
					div3t: "אבטחה לשירות ישויות",
					div3a: "אם אתה משתמש בשירות ישויות מתארח שנוצר באמצעות כלי הבניה של הסיור הממופה, האפליקציה מנהלת את שירות האבטחה עבורך ואתה תישאר היחידי עם הרשאות עריכה אפילו אם תשתף את השירות הזה לציבור.",
					div3t2: "לפני שיתוף הסיור שלך עם הקהל",
					div3: "וודא שהסיור אכן עובד כאשר אתה לא מחובר לחשבון ה- ArcGIS.com שלך. ה- URL לא צריך להפנות לדף הכניסה או למצב בנייה.",
					div4: "שווה לבדוק איך הסיור הממופה שלך נראה ב- iPad כאשר הוא מוחזק לרוחב ולוודא שזה נראה טוב על המכשיר הפופולרי הזה. בדיקה זו עשוייה לעזור לך לראות אם ההסברים שהוספת מכסים שטח רב מידי יחסית לתמונות. כמו כן זה מאפשר לך לבדוק שכיתוביות  שלך אינן ניראות מקוטעות בגלל אורכן.",
					div5a: "המלצה על חיפוש",
					div5b: "כדי לעזור לאנשים למצוא את הסיור הממופה שלך אם הם מחפשים ב- ArcGIS Online, אנו ממליצים לך להוסיף את התג 'מפת הסיפור' לדף פריט  היישום של הסיור הממופה שלך (לא דף הפריט של ה- web map שלך), יחד עם תגים כגון שם המדינה או האיזור בו נמצא הסיור, את שם המדינה, אם זה  מחוץ לגבולות המדינה, ותגים נושאיים כמו \"אמנות ציבורית\", 'מדריך תיירים' או 'מקומות היסטוריים'. תגים אלה יכולים גם לעזור לנו ב- Esri למצוא דוגמאות  חדשות מענינות של סיורים שאנחנו יכולים להציג בגלריות שלנו ולקדום ברשתות החברתיות. כמו כן, אנו ממליצים לך להעלות תמונות גרפיות ממוזערות שניראות טוב לדף פריט היישום שלך, כגון צילום מסך קטן של הסיור או אחת התמונות שלו. תמונה זו תהיה בשימוש באופן אוטומטי אם הסיור הממופה שלך  יתווסף לגלרית ArcGIS Online."
				}
			},
			share: {
				firstSaveTitle: "הסיור נשמר בהצלחה",
				firstSaveHeader: "הסיור נשמר כעת ב- ArcGIS Online . אנא קרא את התשובות לשאלות השכיחות הבאות.",
				firstSaveA1: "אם אינך מכיר את ArcGIS Online או שאתה מעוניין בקיצור דרך לממשק העריכה, אתה יכול לשמור את הלינק הבא: %LINK1%",
				firstSaveA1bis: "ניתן למצוא את הסיור גם ב- <a href='%LINK2%' target='_blank'>מחיצת התוכן של ArcGIS Online </a>.",
				firstSaveQ2: "האם הסיור שלי משותף?",
				firstSaveA2: "כעת הסיור שלך אינו משותף. כדי לשתף אותו, השתמש בכפתור שתף.",
				shareTitle: "שתף את הסיור שלך",
				sharePrivateHeader: "הסיור שלך אינו משותף, ​​היית רוצה לשתף אותו?",
				sharePrivateBtn1: "שתף באופן ציבורי",
				sharePrivateBtn2: "שתף עם הארגון שלי",
				sharePrivateProgress: "שיתוף בתהליך...",
				sharePrivateErr: "השיתוף נכשל, נסה שנית או",
				sharePrivateOk: "עדכון השיתוף הצליח, טוען...",
				sharePreviewAsUser: "תצוגה מקדימה",
				shareHeader1: "הסיור שלך <strong>נגיש לציבור</strong>.",
				shareHeader2: "הסיור שלך נגיש לחברי הארגון שלך (נדרש להתחבר).",
				shareLinkHeader: "שתף את הסיור עם הקהל",
				shareLinkOpen: "פתח",
				shareQ1Opt1: "כיצד לשמור על הסיור פרטי?",
				shareQ1Opt2: "כיצד אני יכול לשמור את הסיור כפרטי או לשתף אותו לציבור?",
				shareA1: "השתמש ב- %SHAREIMG% ב- <a href='%LINK1%' target='_blank'>דף פריט האפליקציה</a>. אם אתה רוצה גם לבטל את שיתוף של ה- webmap, השתמש ב- <a href='%LINK2%' target='_blank'>דף פריט webmap</a>.",
				shareA1bis: "אם אתה רוצה לבטל גם את השיתוף לשירות הישויות, השתמש <a href='%LINK1%' target='_blank'>דף פריט שירות הישויות</a>.",
				shareQ2: "כיצד ניתן לערוך את הסיור במועד מאוחר יותר?",
				shareQ2bis: "כיצד אני יכול לחזור לממשק הפרסום?",
				shareA2div1: "שמור והשתמש שוב בקישור הבא %LINK1% או השתמש ב- <a href='%LINK2%' target='_blank'>דף פריט האפליקציה</a>.",
				shareA2div2: "כבעלים של האפליקציה, כאשר אתה מתחבר אל ArcGIS.com האפליקציה כוללת כפתור הפותח את אשף הבנייה האינטראקטיבי.",				
				shareQ3: "היכן מאוחסן המידע?",
				shareA3: "תצורת הסיור מאוחסנת בתוך  <a href='%LINK1%' target='_blank'>פריט webmap זה</a> וגם זה <a href='%LINK2%' target='_blank'> פריט האפליקציה</a>. אם ייבאת תמונות מתוך Flickr, Picasa, Facebook או קטעי וידאו מתוך YouTube התמונות והוידאו שלך יישארו כהפניה לאתרים שלהם והם אינם משוכפלים ב- ArcGIS Online.",
				shareWarning: "שיתוף עם %WITH% לא מתאפשר מכיוון שאינך הבעלים של <a href='%LINK%' target='_blank'>webmap</a>.",
				shareWarningWith1: "ציבורי",
				shareWarningWith2: "ציבורי וגם עם הארגון"
			}
        }
    })
);
