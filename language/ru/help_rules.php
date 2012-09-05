<?php
if (!defined('IN_PHPBB'))
{
   exit;
}

// DEVELOPERS PLEASE NOTE
//
// All language files should use UTF-8 as their encoding and the files must not contain a BOM.
//
// Placeholders can now contain order information, e.g. instead of
// 'Page %s of %s' you can (and should) write 'Page %1$s of %2$s', this allows
// translators to re-order the output of data while ensuring it remains correct
//
// You do not need this where single placeholders are used, e.g. 'Message %d' is fine
// equally where a string contains only two placeholders which are used to wrap text
// in a url you again do not need to specify an order e.g., 'Click %sHERE%s' is fine

$help = array(
	array(
		0 => '--',
		1 => 'Раздел 1. Форум'
	),
	array(
		0 => '1.1. Общие положения',
		1 => 'Данные правила действительны для всего форума, если иное не оговорено отдельно. Незнание этих и других правил форума не только не освобождает вас от ответственности за их нарушение, но и само по себе является нарушением и отягчающим вину обстоятельством. Данные правила могут быть изменены или дополнены в силу возникновения обстоятельств, не рассмотренных в настоящих правилах. За нарушения этих правил к пользователю могут быть применены некоторые штрафные санкции.'
	),
	array(
		0 => '1.2. Общие правила',
		1 => 'Запрещается публиковать информацию, содержащую: <ol><li>чрезмерное количество жаргонных слов, грубые и нецензурные слова или выражения;</li><li>рекламу;</li><li>порнографию;</li><li>чужую личную информацию;</li><li>оскорбления, угрозы, клевету;</li><li>объекты расистского характера и разжигания межнациональной розни;</li><li>призывы к насилию или нарушению действующего законодательства.</li></ol>Наказание: правка или удаление информации, а также предупреждение или бан пользователя.'
	),
	array(
		0 => '--',
		1 => 'Раздел 2. Регистрация и настройка профиля пользователя'
	),
	array(
		0 => '2.1. Регистрация',
		1 => 'Запрещается:<ol><li>указание несуществующего адреса электронной почты;</li><li>регистрация нескольких учётных записей;</li><li>подделка профилей других пользователей;</li><li>подбор паролей к чужим учётным записям.</li></ol>Наказание: бан или удаление учётной записи.'
	),
	array(
		0 => '2.2. Имя пользователя',
		1 => 'Запрещается:<ol><li>использование имён, схожих с именами других пользователей форума;</li><li>использование в имени служебных символов (не являющихся буквами или цифрами);</li><li>использование имён, практически полностью состоящих из цифр;</li><li>использование в качестве имени адресов веб-сайтов.</li></ol>Наказание: изменение имени пользователя в принудительном порядке.<br />Рекомендуется: использовать короткие, хорошо запоминающиеся комбинации символов, так, или иначе связанные с вами.'
	),
	array(
		0 => '2.3. Аватара',
		1 => 'Запрещается:<ol><li>использование аватар, уже установленных кем-либо на данном форуме;</li><li>частое изменение аватары (чаще раза в месяц).</li></ol>Наказание: удаление аватары, в случае неоднократного нарушения — блокировка возможности выбора аватары.<br />Рекомендуется: использовать в качестве аватары свою фотографию или другое запоминающееся изображение.'
	),
	array(
		0 => '--',
		1 => 'Раздел 3. Темы и сообщения'
	),
	array(
		0 => '3.1. Темы',
		1 => 'Запрещается:<ol><li>создание тем, обращенных к конкретным пользователям форума;</li><li>создание малосодержательных тем, тем с заведомым расчётом на флуд, оффтоп и флейм;</li><li>дублирование уже существующих тем;</li><li>создание тем, которые не соответствуют тематике раздела.</li></ol>Наказание: удаление темы или её перенос в соответствующий раздел, предупреждение автору.',
	),
	array(
		0 => '3.2. Название темы',
		1 => 'Правило: название темы должно как можно более ясно отражать её суть.<br />Запрещается:<ol><li>использование в качестве темы малосодержательных выражений, таких как: «Помогите!», «Срочно!», «Проблема!» и др.;</li><li>частичное или полное написание названия заглавными буквами: «ЧТО ДЕЛАТЬ???»;</li><li>использование большого количества сгруппированных знаков препинания: «Компьютер при загрузке зависает!!! Что делать??????»;</li><li>украшательство названия различными символами: «..::Название темы::..»;</li><li>использование названия темы, никак логически не связанного с вашим сообщением.</li></ol>Наказание: исправление названия темы в принудительном порядке, предупреждение автору темы.<br />Рекомендуется: как можно более кратко раскрыть суть темы: «Результаты чемпионата по игре в Quake III»; интриговать в названии темы посетителя: «Выборы: правда и ложь», «Вышла новая версия Windows. Что внутри?». Помните: каждый посетитель по названию темы должен догадаться, что он в ней увидит.',
	),
	array(
		0 => '3.3. Сообщения',
		1 => 'Запрещается:<ol><li>написание сообщения заглавными буквами;</li><li>злоупотребление BBCode (применение стиля ко всему сообщению);</li><li>использование методик написания текста, при которых его смысл не всегда ясен посетителям: «LLImo Humb yMHoe cka3aJI 6bI...»;</li><li>злоупотребление графическими смайликами (на 100 символов не более одного смайлика);</li><li>использование смайликов с других сайтов при помощи BBCode [img];</li><li>вставка изображений объёмом более 250 килобайт при помощи BBCode [img] (вы можете ограничиться обычной ссылкой с описанием);</li><li>публикация сообщений, состоящих из одной только ссылки без описания (каждый пользователь имеет право заранее знать, что он увидит по вашей ссылке).</li></ol>Наказание: исправление или удаление сообщения, предупреждение автору, в случае неоднократного нарушения — бан.<br />Не рекомендуется: использовать чрезмерное количество современных сетевых «диалектов», профессиональных терминов и т.п., если тема обсуждения этого не требует.<br />Рекомендуется: писать грамотно.',
	),
	array(
		0 => '3.4. Обсуждения',
		1 => 'Запрещается:<ol><li>обсуждение действий модераторов форума вне администраторского раздела;</li><li>флейм — переход во время обсуждения чего-либо границ вежливости;</li><li>флуд — бессмысленная или малосодержательная информация, которая не несёт в себе смысловой нагрузки, т.е. короткие сообщения вроде «класс», «интересно» и др.;</li><li>оффтоп — сообщения которые не соответствуют теме, т.е. если разговор идет о марках машин, а сообщение написано о том, что завтра вы идете в кино;</li><li>личная переписка — для решения личных вопросов есть система Личных Сообщений;</li><li>применение нечестных приёмов ведения дискуссий в виде «передёргиваний» высказываний собеседников, правки/удаления своих собственных сообщений с целью исказить/скрыть их первоначальный смысл.</li></ol>Наказание: за оффтоп, флейм или флуд — удаление сообщений с нарушениями и предупреждение; за «передёргивания» — ограничение прав нарушителя на редактирование собственных сообщений.'
	)
);

?>